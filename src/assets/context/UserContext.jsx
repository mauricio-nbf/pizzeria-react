import { createContext, useState } from 'react'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  // Token simulado: por defecto el usuario está "logueado"
  const [token, setToken] = useState(true)

  // Cerrar sesión = poner el token en false
  const logout = () => {
    setToken(false)
  }

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider