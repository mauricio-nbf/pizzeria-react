import { createContext, useState } from 'react'

// 1- Creamos el contexto (igual que CounterContext de la clase)
export const CartContext = createContext()

// 2- El Provider guarda el estado y lo comparte con sus "hijos"
const CartProvider = ({ children }) => {
  // El carrito parte vacío: el usuario lo llena desde Home
  const [cart, setCart] = useState([])

  // Agregar desde Home: si ya está, suma 1; si no, la agrega con count 1
  const agregarCart = (pizza) => {
    const existe = cart.find((item) => item.id === pizza.id)

    if (existe) {
      countAument(pizza.id)
      return
    }

    setCart([...cart, { ...pizza, count: 1 }])
  }

  // Botón +  (lo mismo que tenías en Cart.jsx)
  const countAument = (id) => {
    const nuevoCarrito = cart.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, count: pizza.count + 1 }
      }
      return pizza
    })
    setCart(nuevoCarrito)
  }

  // Botón −  (lo mismo que tenías en Cart.jsx)
  const countDeagre = (id) => {
    const pizzaActual = cart.find((pizza) => pizza.id === id)

    if (pizzaActual.count === 1) {
      setCart(cart.filter((pizza) => pizza.id !== id))
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

  // Total calculado en UN solo lugar → Navbar y Cart muestran el mismo
  let total = 0
  cart.forEach((pizza) => {
    total += pizza.price * pizza.count
  })

  // 3- Todo lo que pongamos en value queda disponible para useContext
  return (
    <CartContext.Provider value={{ cart, agregarCart, countAument, countDeagre, total }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider