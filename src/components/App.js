import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './Theme'
import Item from './Item'
import Checkout from './Checkout'
import Header from './Header'

import data from '../cart.json'
import { Container } from '@material-ui/core'

import t1 from '../assets/T1.jpg'
import t2 from '../assets/T2.jpg'
import t3 from '../assets/T3.jpg'
import t4 from '../assets/T4.jpg'

function App() {
  const images = [t1, t2, t3, t4]
  const handleEdit = (size, productId, qty) => {
    for (let item of data.productsInCart) {
      if (item.p_id === productId) {
        item.p_selected_size.code = size
        item.p_quantity = qty
      }
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header numberOfProducts={data.productsInCart.length} />
        {data.productsInCart.map((item, i) => (
          <Item
            products={item}
            key={item.p_id}
            handleEdit={handleEdit}
            images={images[i]}
          />
        ))}
        <Checkout
          itemsInCart={data.productsInCart.length}
          products={data.productsInCart}
        />
      </Container>
    </ThemeProvider>
  )
}

export default App
