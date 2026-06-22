import { useNavigate } from 'react-router-dom'
import './About.css'

function About() {
    const navigate = useNavigate()

    const irHome = () => {
        navigate('/')
    }

    const irContact = () => {
        navigate('/contact')
    }

    return (
        <div className='About'>
            <h1>Sobre esta aplicación</h1>
            <p>Esta página muestra información básica del proyecto y cómo se navega entre componentes.</p>
            <button onClick={irHome}>Volver a inicio</button>
            <button onClick={irContact}>Ir a contacto</button>
        </div>
    )
}

export default About
