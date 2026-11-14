import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const total = 25000;
    const token = false;

  return (
    <nav className="navbar">
    <div className="container">
      
   
        <div className='primerElemento'>
            <div className='nombrePizzeriaYopcionesSitio'>
                <div className='nombrePizzeria'>
                    <h3>¡Pizzeria Mamma Mia!</h3>
                </div>

                <div className='opcionesSitio'>
                    <Link className="nav-item nav-link active" to="/"><button className='btn-opcionSitio'>🍕 Home</button></Link>
                
                    <Link className="nav-item nav-link" to="/profile"><button className='btn-opcionSitio'>🔓 Profile</button></Link>
                {

                    token ? (
                        <>
                            
                            <Link className="nav-item nav-link" to="/"><button className='btn-opcionSitio'>🔒 Logout</button></Link>
                        </>
                    ):(
                        <>
                        <Link className="nav-item nav-link" to="/login"><button className='btn-opcionSitio'>🔏 Login</button></Link>
                        <Link className="nav-item nav-link" to="/register"><button className='btn-opcionSitio'>🔐Register</button></Link>
                        </> 
                    )

                }

                </div>
            </div>

          
            <div className='totalCuenta'>
                 <Link className="nav-item nav-link" to="/cart"><button className='btn-totalCuenta'>🛒Total:$ {total.toLocaleString()}</button></Link>
            </div>
        
         
        
        </div>
      </div>
   
  </nav>
  )
}

export default Navbar