//import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Nav.css'

function Nav() {
    const navigate = useNavigate()

    const irContact = () => {
        navigate('/contact')
    }

    return (
        <div className= 'Nav'>
            <h1>Sección de navegación</h1>
            <p>Desde aquí puedes ir directamente a la página de contacto.</p>
            <button onClick={irContact}>Ir a la página de contacto</button>
        </div>
    )
}


export default Nav