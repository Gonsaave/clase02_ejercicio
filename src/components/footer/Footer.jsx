import React from 'react'

const Footer = () => {
    const name = 'Curso React 2021. Todos los derechos e izquierdos reservados.'

    return (
        <footer className="footer mt-auto py-3 bg-light">
            <div className="container">
                <span className="text-muted">
                {name}
                </span>
            </div>
        </footer>
    );
}

export default Footer