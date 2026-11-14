import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'

function Cart() {
    // Todo viene del contexto: el mismo carrito que llena Home
    const { cart, countAument, countDeagre, total } = useContext(CartContext)

        const { token } = useContext(UserContext)

        const [mensajeCompra, setMensajeCompra] = useState('')

    const pagar = async () => {
        const response = await fetch('http://localhost:5000/api/checkouts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ cart }),
        })
        const data = await response.json()

        if (data.error) {
            setMensajeCompra(`Error: ${data.error}`)
            return
        }
        setMensajeCompra('¡Compra realizada con éxito! 🍕')
    }

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
                       <button disabled={!token} onClick={pagar}>Pagar</button>
            {mensajeCompra && <p className="mt-3">{mensajeCompra}</p>}
        </div>
    )
}

export default Cart