import { useState } from 'react'



function Register() {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confPassword, setConfirmPassword] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [mensaje2, setMensaje2] = useState("")
  
  // DATO PARA FORZAR
  
  const [color, setColor] = useState("")
  
  const handleSubmit =  (e) => {
    e.preventDefault()
      if(
        
        email === "" ||
        password === "" || 
        confPassword === "" 
      )

      {
        setColor("red")        
        setMensaje("Todos los campos son obligatorios")
        return
      }



      setColor("green")
      setMensaje("Usuario registrado correctamente")
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
        setMensaje("La contraseña debe tener más de 6 caracteres")
        return
      } else {
                        
        setMensaje("")
      }

       

    }

    if(name === "confPassword"){
      setConfirmPassword(value)

        if(password === value){
        setMensaje2("")
        return
      } else {

        setColor("red")        
        setMensaje2("Debe ser igual a la contraseña ingresada")
                        
        
      }


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
      type="texts" 
      name = "password"
      value={password}
      onChange={handleChange}
      />


    <p>Confirmación Password</p>
    <input 
      type="text" 
      name = "confPassword" 
      value={confPassword}
      onChange={handleChange}
      />

    {mensaje2 && <p style={{color}}>{mensaje2}</p>}

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
