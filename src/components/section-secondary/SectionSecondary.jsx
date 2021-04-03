import React, { useState } from 'react'
import './SectionSecondary.css'

const SectionSecondary = () => {
    const sectionTitle = 'Sección Secundaria'
    const itemsIniciales = ['Sección 1',]

    const [items, setItems] = useState(itemsIniciales)
    const [clicks, setClicks] = useState(1)

    const Item = ({ children }) => {
        return (<li class="list-group-item">{children}</li>)
    }

    const addItem = () => {
        const clicksItems = [...Array(clicks).keys()]
        const newItems = clicksItems.map((c) => `Sección ${c+2}` )
        const finalItems = [...itemsIniciales, ...newItems]
        setItems(finalItems)
        setClicks(clicks + 1)
    }

    const resetItems = () => {
        setItems(itemsIniciales)
        setClicks(1)
    }

    return (
        <div id="section-secundaria" className="container-fluid">
            <p>{sectionTitle}</p>
            <h3>En construcción...</h3>
            <button className="btn btn-primary btn-sm" onClick={addItem}>Agregar sección</button>
            <button className="btn btn-warning btn-sm" onClick={resetItems} style={{marginLeft: '1rem'}}>Reset sección</button>
            <div style={{marginTop: '2rem'}}>
                <ul class="list-group">
                    {items.map((item, index) => (
                        <Item key={index}>{item}</Item>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SectionSecondary