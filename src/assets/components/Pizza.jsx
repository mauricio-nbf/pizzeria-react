import { useState, useEffect } from 'react'

const Pizza = () => {
  // Parte en null porque aún no tenemos la pizza
  const [pizza, setPizza] = useState(null)

  useEffect(() => {
    consultarPizza()
  }, [])

  const consultarPizza = async () => {
    const url = 'http://localhost:5000/api/pizzas/p001' 
    const response = await fetch(url)
    const data = await response.json()
    setPizza(data)
  }

  // Mientras la API responde, pizza es null: mostramos un mensaje
  // (si no, pizza.name daría error en el primer render)
  if (!pizza) {
    return <p>Cargando pizza...</p>
  }

  return (
    <article className="card">
      <img src={pizza.img} alt={pizza.name} width="400" />
      <div className="card-body">
        <h2>{pizza.name}</h2>
        <p>{pizza.desc}</p>

        <p className="fw-light h5">Ingredientes:</p>
        <ul className="list-unstyled">
          {pizza.ingredients.map((ingrediente) => (
            <li key={ingrediente}>🍕 {ingrediente}</li>
          ))}
        </ul>

        <p className="precio">
          Precio: $ <span className="h5 fw-bold">{pizza.price.toLocaleString('es-CL')}</span>
        </p>
        <button className="btn-opcionSitio">Añadir 🛒</button>
      </div>
    </article>
  )
}

export default Pizza