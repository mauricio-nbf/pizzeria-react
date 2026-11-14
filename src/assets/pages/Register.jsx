import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'


function Register() {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confPassword, setConfirmPassword] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [mensaje2, setMensaje2] = useState("")
    const { register } = useContext(UserContext)
  
  // DATO PARA FORZAR
  
  const [color, setColor] = useState("")
  
   const handleSubmit = async (e) => {
    e.preventDefault()
    if (email === "" || password === "" || confPassword === "") {
      setColor("red")
      setMensaje("Todos los campos son obligatorios")
      return
    }

    if (password !== confPassword) {
      setColor("red")
      setMensaje("Las contraseñas no coinciden")
      return
    }

    const error = await register(email, password)

    if (error) {
      setColor("red")
      setMensaje(error)
    }
  }
  
  const handleChange = (e)=>{
    const {name, value} = e.target
    console.log(value)
    
   
    if(name =="email"){
      setEmail(value)
    }

    if(name =="password"){
      setPassword(value)

            if(value.length<6){
        setColor("red")        
        setMensaje("La contraseña debe tener al menos 6 caracteres")
        return
      } else {
                        
        setMensaje("")
      }

       

    }

        if (name === "confPassword") {
      setConfirmPassword(value)
    }

  } 

  return (
   <>
   <div className='registroUsuario'>
   <h1>Registro de Usuario</h1>
   <form onSubmit={handleSubmit}>
    
    <p>Email</p>
    <input 
      type="email"
      name = "email"
      value = {email}
      onChange={handleChange}
      />
    <p>Password</p>
    <input 
      type="password" 
      name = "password"
      value={password}
      onChange={handleChange}
      />


    <p>Confirmación Password</p>
    <input 
      type="password" 
      name = "confPassword" 
      value={confPassword}
      onChange={handleChange}
      />

 

   <button type='submit'>
    Registrarse
   </button>

   {
      mensaje && <p style={{color}}>{mensaje}</p>
   } 
   </form>
   
   </div>

   </>
  )
}

export default Register 
