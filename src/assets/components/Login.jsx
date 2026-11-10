import { useState } from 'react'



function Login() {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [mensaje2, setMensaje2] = useState("")
  
  
  
  const [color, setColor] = useState("")
  
  const handleSubmit =  (e) => {
    e.preventDefault()
    if (email === "" || password === "") {
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

  } 

  return (
   <>
   <div className='registroUsuario'>
   <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            
            <p>Email</p>
            <input 
            type="email"
            name = "email"
            value = {email}
            onChange={handleChange}
            />
            <p>Pasaword</p>
            <input 
            type="texts" 
            name = "password"
            value={password}
            onChange={handleChange}
            />


        <button type='submit'>
            Login
        </button>

        {
            mensaje && <p style={{color}}>{mensaje}</p>
        } 
        </form>
        
   </div>

   </>
  )
}

export default Login 
