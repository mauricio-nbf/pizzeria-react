import { useState } from 'react'
import { pizzaCart } from '../data/Productos'

function Cart() {
    // El estado parte con las pizzas del carrito simulado
    const [cart, setCart] = useState(pizzaCart)

    // Botón +: copia el array y le suma 1 al count de la pizza con ese id
    const countAument = (id) => {
        const nuevoCarrito = cart.map((pizza) => {
            if (pizza.id === id) {
                return { ...pizza, count: pizza.count + 1 }
            }
            return pizza
        })
        setCart(nuevoCarrito)
    }

    // Botón -: si queda en 1, se elimina del carrito; si no, resta 1
    const countDeagre = (id) => {
        const pizzaActual = cart.find((pizza) => pizza.id === id)

        if (pizzaActual.count === 1) {
            const nuevoCarrito = cart.filter((pizza) => pizza.id !== id)
            setCart(nuevoCarrito)
            return
        }

        const nuevoCarrito = cart.map((pizza) => {
            if (pizza.id === id) {
                return { ...pizza, count: pizza.count - 1 }
            }
            return pizza
        })
        setCart(nuevoCarrito)
    }

    // Total: suma de precio x cantidad. Se recalcula en cada render
    let total = 0
    cart.forEach((pizza) => {
        total += pizza.price * pizza.count
    })

    return (
        <div className="container">
            <h4>Detalles del pedido:</h4>

            {cart.length === 0 ? (
                <p>El carro está vacío</p>
            ) : (
                cart.map((pizza) => (
                    <div key={pizza.id}>
                        <img src={pizza.img} alt={pizza.name} width="60" />
                        <span>{pizza.name}</span>
                        <span> ${pizza.price.toLocaleString('es-CL')} </span>
                        <button onClick={() => countDeagre(pizza.id)}>-</button>
                        <span> {pizza.count} </span>
                        <button onClick={() => countAument(pizza.id)}>+</button>
                        <p>Subtotal: ${(pizza.price * pizza.count).toLocaleString('es-CL')}</p>
                    </div>
                ))
            )}

            <h2>Total: ${total.toLocaleString('es-CL')}</h2>
            <button>Pagar</button>
        </div>
    )
}

export default Cart