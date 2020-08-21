import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './Theme'
import Item from './Item'
import Checkout from './Checkout'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>YOUR SHOPPING BAG</h1>
      <Item />
      <Checkout />
    </ThemeProvider>
  )
}

export default App
