import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'

const Profile = () => {
  const { email, getProfile, logout } = useContext(UserContext)

  // Al entrar a la página, pedimos el perfil al backend (/api/auth/me)
  useEffect(() => {
    getProfile()
  }, [])

  return (
    <div className="container my-5">
      <h2>Mi perfil</h2>
      <p>Email: <strong>{email}</strong></p>
      <button className="btn btn-dark" onClick={logout}>Cerrar sesión</button>
    </div>
  )
}

export default Profile