import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './Theme'
import Item from './Item'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>YOUR SHOPPING BAG</h1>
      <Item />
    </ThemeProvider>
  )
}

export default App
