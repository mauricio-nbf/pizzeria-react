import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


const CardPizza = ({product}) => {

 
  const { agregarCart } = useContext(CartContext)

  return (

   
    <article className="card">
        
          <img src={product.img} width = "250px"  height = "250px" className="card-img-top" alt="" />
          <div className="card-body">
             <p className="card-text h4 fw-bold">{product.name}</p>
             <hr />
            <p className="fw-light h5">
              Ingredientes:
            </p>
            <ul className="list-unstyled card-title h7 fw-light mb-3">
                {product.ingredients.map((ingrediente, index) => (
                    <li key={index}>🍕 {ingrediente}</li>
                ))}
<           /ul>
           

            <hr />
            <p className='precio'>Precio: $ <span className="h5 fw-bold ms-3"> {product.price}</span></p>

             <div className='btns-detalleProductoOpecionSitio'>
                        <Link to={`/pizza/${product.id}`}><button className='btn-detalleProducto'>Ver Mas 👀</button></Link>
                        <button className='btn-opcionSitio' onClick={() => agregarCart(product)}>Añadir 🛒</button>

                          
             </div>           


            
         
        </div>
    </article>



   



)
}

export default CardPizza