import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container text-center my-5">
      <h1>404 🍕</h1>
      <p>¡Ups! Esta pizza no está en el menú.</p>
      <Link to="/" className="btn btn-dark">Volver al inicio</Link>
    </div>
  )
}

export default NotFound