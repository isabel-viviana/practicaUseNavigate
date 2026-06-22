import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
    const navigate = useNavigate()

    const irContact = () => {
        navigate('/contact')
    }

    const irNav = () => {
        navigate('/nav')
    }

    return (
        <div className='Home'>
            <h1>Página de inicio</h1>
            <p>Bienvenido a la aplicación. Desde aquí puedes ir a la página de navegación o al contacto.</p>
            <button onClick={irContact}>Ir a la página de contacto</button>
            <button onClick={irNav}>Ir a la página de navegación</button>
        </div>
    )
}

export default Home
