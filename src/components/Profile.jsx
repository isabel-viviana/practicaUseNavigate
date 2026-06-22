import { useNavigate } from 'react-router-dom'
import './Profile.css'

function Profile() {
    const navigate = useNavigate()

    const irHome = () => {
        navigate('/')
    }

    const irNav = () => {
        navigate('/nav')
    }

    return (
        <div className='Profile'>
            <h1>Perfil de usuario</h1>
            <p>Esta página simula un perfil simple y permite volver a inicio o a la navegación principal.</p>
            <button onClick={irHome}>Volver a inicio</button>
            <button onClick={irNav}>Ir a navegación</button>
        </div>
    )
}

export default Profile
