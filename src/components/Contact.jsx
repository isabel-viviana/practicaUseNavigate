import imagenConctacto from '../assets/imageContact.jpg'
import './Contact.css'

const Contact = () => {
  return (
    <div className= 'Contact'>
        <h1>soy el Contacto</h1>

        <img src = {imagenConctacto} alt = 'imagen del contacto' width="300" height="200"/>

    </div>
  )
}

export default Contact