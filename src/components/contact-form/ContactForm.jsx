import React, { useState } from 'react'

const ContactForm = () => {
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')

    const handleChangeNombres = (event) => setNombres(event.target.value)
    const handleChangeApellidos = (event) => setApellidos(event.target.value)
    const handleChangeEmail = (event) => setEmail(event.target.value)
    const handleChangeTelefono = (event) => setTelefono(event.target.value)

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const nombres = event.target.nombres.value
        const apellidos = event.target.apellidos.value
        const email = event.target.email.value
        const telefono = event.target.telefono.value
        alert(`Datos del formulario \r\n nombres: ${nombres} \r\n apellidos ${apellidos} \r\n email: ${email} \r\n telefono: ${telefono}`)
        setNombres('')
        setApellidos('')
        setEmail('')
        setTelefono('')
    }

    return (
        <div class="card">
            <div class="card-body">
            <form className="form-inline" onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombres</label>
                    <input type="text" placeholder="Cosme" name="nombres" className="form-control" value={nombres} onChange={handleChangeNombres}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellidos</label>
                    <input type="text" placeholder="Fulanito" name="apellidos" className="form-control" value={apellidos} onChange={handleChangeApellidos}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo electrónico</label>
                    <input type="email" placeholder="cosme.fulanito@gmail.com" name="email" className="form-control" value={email} onChange={handleChangeEmail}/>
                    <div id="emailHelp" className="form-text">Se enviará la información a este correo ficticio.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    <input type="text" placeholder="+569xxxxxxxx" name="telefono" className="form-control" value={telefono} onChange={handleChangeTelefono}/>
                </div>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
            </div>
        </div>
    );
}

export default ContactForm