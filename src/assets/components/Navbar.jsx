import React from 'react'

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
                    <a className="nav-item nav-link active" href="#"><button className='btn-opcionSitio'>🍕 Home</button></a>
                

                {

                    token ? (
                        <>
                            <a className="nav-item nav-link" href="#"><button className='btn-opcionSitio'>🔓 Profile</button></a>
                            <a className="nav-item nav-link" href="#"><button className='btn-opcionSitio'>🔒 Logout</button></a>
                        </>
                    ):(
                        <>
                        <a className="nav-item nav-link" href="#"><button className='btn-opcionSitio'>🔏 Login</button></a>
                        <a className="nav-item nav-link" href="#"><button className='btn-opcionSitio'>🔐Register</button></a>
                        </> 
                    )

                }

                </div>
            </div>

          
            <div className='totalCuenta'>
                 <a className="nav-item nav-link" href="#"><button className='btn-totalCuenta'>🛒Total:$ {total.toLocaleString()}</button></a>
            </div>
        
         
        
        </div>
      </div>
   
  </nav>
  )
}

export default Navbar