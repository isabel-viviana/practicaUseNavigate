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
            <h1>soy el Nav</h1>

            <button onClick={irContact}>Ir a Contacto</button>

        </div>
    )
}


export default Nav