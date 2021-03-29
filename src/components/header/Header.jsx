import React from 'react'
import Menu from '../menu/Menu'

const Header = () => {
    const title = 'Formulario de contacto'

    return (
        <header>
            <Menu/>
            <div class="p-5 text-center bg-light">
                <h5>{title}</h5>
            </div>
        </header>
    );
}

export default Header