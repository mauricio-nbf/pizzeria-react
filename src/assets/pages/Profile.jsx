const Profile = () => {
  // Por ahora el email es fijo
  const email = 'usuario@mammamia.cl'

  return (
    <div className="container my-5">
      <h2>Mi perfil</h2>
      <p>Email: <strong>{email}</strong></p>
      <button className="btn btn-dark">Cerrar sesión</button>
    </div>
  )
}

export default Profile