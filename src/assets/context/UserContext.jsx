import { createContext, useState } from 'react'

export const UserContext = createContext()

const URL_BASE = 'http://localhost:5000/api/auth'

const UserProvider = ({ children }) => {
  // Ya no es true/false: parte en null (sin sesión) y guarda el JWT real
  const [token, setToken] = useState(null)
  const [email, setEmail] = useState(null)

  // Login: envía email y password; si sale bien, guarda token y email
  const login = async (emailIngresado, password) => {
    const response = await fetch(`${URL_BASE}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: emailIngresado, password }),
    })
    const data = await response.json()

    // Si el backend responde con error, lo devolvemos para mostrarlo en la página
    if (data.error) {
      return data.error
    }

    setToken(data.token)
    setEmail(data.email)
    return null // null = sin error
  }

  // Register: igual que login, pero contra /register
  const register = async (emailIngresado, password) => {
    const response = await fetch(`${URL_BASE}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: emailIngresado, password }),
    })
    const data = await response.json()

    if (data.error) {
      return data.error
    }

    setToken(data.token)
    setEmail(data.email)
    return null
  }

  // Logout: borra token y email del estado
  const logout = () => {
    setToken(null)
    setEmail(null)
  }

  // Perfil: ruta privada → hay que enviar el token en el header
  const getProfile = async () => {
    const response = await fetch(`${URL_BASE}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const data = await response.json()
    setEmail(data.email)
  }

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider