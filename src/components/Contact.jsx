import imagenConctacto from '../assets/imageContact.jpg'
import './Contact.css'

const Contact = () => {
  return (
    <div className= 'Contact'>
        <h1>Página de contacto</h1>
        <p>En esta sección puedes ver una tarjeta de contacto con imagen y estilo simple.</p>
        <img src = {imagenConctacto} alt = 'imagen del contacto' width="300" height="200"/>
    </div>
  )
}

export default Contact