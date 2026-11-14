import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Cart() {
    // Todo viene del contexto: el mismo carrito que llena Home
    const { cart, countAument, countDeagre, total } = useContext(CartContext)

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