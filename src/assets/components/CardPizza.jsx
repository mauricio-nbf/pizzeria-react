import React from 'react'

const CardPizza = ({name,price,ingredients,img}) => {
  return (

   
    <article className="card">
        
          <img src={img} width = "250px"  height = "250px" className="card-img-top" alt="" />
          <div className="card-body">
             <p className="card-text h4 fw-bold">{name}</p>
             <hr />
            <p className="fw-light h5">
              Ingredientes:
            </p>
            <p className="card-title h7 fw-light mb-3">
              🍕 {Array.isArray(ingredients) ? ingredients.join(", ") : ingredients}
            </p>
           

            <hr />
            <p className='precio'>Precio: $ <span className="h5 fw-bold ms-3"> {price}</span></p>

             <div className='btns-detalleProductoOpecionSitio'>
                        <button className='btn-detalleProducto'>Ver Mas 👀</button>
                        <button className='btn-opcionSitio'>Añadir 🛒</button>

             </div>           



         
        </div>
    </article>



   



)
}

export default CardPizza