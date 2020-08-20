import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  //   palette: {
  //     common: {},
  //     primary: {},
  //     secondary: {},
  //   },
  typography: {
    fontFamily: 'Raleway',
    fontWeight: 700,
    textTransform: 'none',
    fontSize: '1rem',
  },
  h1: {
    fontSize: '6rem',
    fontWeight: 300,
    letterSpacing: '-0.01562em',
    lineHeight: 1.167,
  },
  h2: {
    fontSize: '3.75rem',
    fontWeight: 300,
    letterSpacing: '-0.00833em',
    lineHeight: 1.2,
  },
  h3: {
    fontSize: '3rem',
    fontWeight: 400,
    letterSpacing: '0em',
    lineHeight: 1.167,
  },
  h4: {
    fontSize: '2.125rem',
    fontWeight: 400,
    letterSpacing: '0.00735em',
    lineHeight: 1.235,
  },
  h5: {
    fontSize: '1.5rem',
    fontWeight: 400,
    letterSpacing: '0em',
    lineHeight: 1.334,
  },
  h6: {
    fontSize: '1.25rem',
    fontWeight: 500,
    letterSpacing: '0.0075em',
    lineHeight: 1.6,
  },
})
