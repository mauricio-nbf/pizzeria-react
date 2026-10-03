import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'

const Home = () => {
  return (
    <>
    <Header/>
    <section className="cards">
    <CardPizza name="Napolitana" price={5950} ingredients={["mozzarella", "tomates", "jamón", "orégano"]} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfbq1uwKwWOduHVePZJZFCKfAblaD_ZVTywHoV1V42tQ&s=10" />
    <CardPizza name="Española" price={6950} ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]} img="https://hips.hearstapps.com/hmg-prod/images/mejores-pizzerias-espana-1675336536.jpeg?crop=0.565xw:1.00xh;0.218xw,0&resize=640:*" />
    <CardPizza name="Pepperoni" price={6950} ingredients={["mozzarella", "pepperoni", "orégano"]} img="https://comedera.com/wp-content/uploads/sites/9/2024/11/pg_pdp190821002.jpeg"/>
    </section>
    </>
  )
}

export default Home