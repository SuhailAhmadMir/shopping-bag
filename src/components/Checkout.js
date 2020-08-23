import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'

import lock from '../assets/lock.jpg'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: '5rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
  gridItem: {
    ...theme.typography.h3,
    fontSize: '0.8rem',
  },
  sideLabel1: {
    color: '#37474F',
  },
  sideLabel2: {
    color: '#546E7A',

    fontSize: '0.8rem',
  },
  sideLabel3: {
    color: '#546E7A',
    cursor: 'pointer',

    fontSize: '0.8rem',
  },
  sideLabel4: {
    color: '#546E7A',
    fontSize: '0.8rem',
    cursor: 'pointer',
  },
  promoLabel: {
    ...theme.typography,
    color: '#546E7A',
    fontSize: '0.8rem',
  },
  leftSection: {
    ...theme.typography,
    paddingLeft: '2rem',
  },
  rightSection: {
    ...theme.typography,
    width: '100%',
    paddingLeft: '6rem',
  },
  promoSection: {
    justifyContent: 'space-around',
  },
  fieldItem: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  promoText: {
    width: '80%',
    marginRight: '1rem',
  },
  fieldButton: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  promoButton: {
    height: '2.5rem',
    borderRadius: '0',
    color: '#37474F',
  },
  divider: {
    marginTop: '1rem',
    height: '0.3rem',
  },
  subtotalSection: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  subtotalLabel: {
    color: '#546E7A',
  },
  subtotalPrice: {
    color: '#37474F',
  },
  freeShipLbl: {
    marginTop: '-18px',
    color: '#90A4AE',
  },
  cocSection: {
    justifyContent: 'space-evenly',
    margin: '1rem',
  },
  contShopLabel: {
    fontSize: '.89rem',
    color: '#546E7A',
    margin: '1rem',
    cursor: 'pointer',
  },
  checkoutButton: {
    borderRadius: '0',
    padding: '0.7rem 1.5rem',
    // marginLeft: '12%',
  },
  secureSection: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  secureIcon: {
    maxWidth: '100%',
    height: '100%',
    display: 'block',
  },
  secureLbl: {
    color: '#546E7A',
  },
  secureImgLbl: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#546E7A',
  },
}))

const Checkout = (props) => {
  const [discount, setDiscount] = React.useState(0)
  const [subTotal, setSubTotal] = React.useState(0)
  const [estimatedTotal, setEstimatedTotal] = React.useState(0)

  const classes = useStyles()

  useEffect(() => {
    let total = 0
    let estAmount = 0
    let disAmount = 0

    props.products.forEach((item) => {
      total += item.p_price
    })

    setSubTotal(parseInt(total))

    if (props.itemsInCart === 3) {
      disAmount = subTotal * 0.05
      setDiscount(disAmount)
    } else if (props.itemsInCart > 3 && props.itemsInCart <= 10) {
      console.log('subtotal in >3', subTotal)
      disAmount = total * 0.01
      setDiscount(disAmount)
    } else if (props.itemsInCart > 10) {
      disAmount = subTotal * 0.25
      setDiscount(disAmount)
    }

    estAmount = total - disAmount

    setEstimatedTotal(estAmount)
    //eslint-disable-next-line
  }, [])

  return (
    <Container>
      <Divider
        variant='fullWidth'
        style={{
          height: '0.5rem',
          marginLeft: '2rem',
          marginTop: '-3rem',
          marginBottom: '',
        }}
      />
      <Grid container className={classes.mainContainer}>
        {/* left section */}
        <Grid item className={classes.leftSection} xs={3}>
          {/* need help or have questions  section */}
          <Grid container direction='column'>
            <Grid item className={classes.sideLabel1}>
              <h4>Need help or have questions ?</h4>
            </Grid>
            <Grid item className={classes.sideLabel2}>
              <h4 fontWeight='fontWeightRegular'>
                Call Customer Service at <br />
                1-800-555-5555
              </h4>
            </Grid>
            <Grid item className={classes.sideLabel3}>
              <h4>
                <u>Chat with one of our stttylists</u>
              </h4>
            </Grid>
            <Grid item className={classes.sideLabel4}>
              <h4>
                <u>See return & exchange policy</u>
              </h4>
            </Grid>
          </Grid>
        </Grid>
        {/* right section */}
        <Grid item className={classes.rightSection} xs={9}>
          {/* enter promo section */}
          <Grid container className={classes.promoSection}>
            <Grid item xs={3} className={classes.promoLabel}>
              <h4>ENTER PROMOTION CODE OR GIFT CARD</h4>
            </Grid>
            <Grid item xs={6} className={classes.fieldItem}>
              <TextField
                variant='outlined'
                id='promo'
                className={classes.promoText}
                size='small'
              />
            </Grid>
            <Grid item xs={3} className={classes.fieldButton}>
              <Button
                className={classes.promoButton}
                variant='outlined'
                color='primary'
                size='small'
              >
                APPLY
              </Button>
            </Grid>
          </Grid>
          {/* divider */}
          <Grid container>
            <Grid item xs={10}>
              <Divider variant='fullWidth' className={classes.divider} />
            </Grid>
          </Grid>
          {/* subtotal */}
          <Grid container className={classes.subtotalSection}>
            <Grid item xs={7} className={classes.subtotalLabel}>
              <h5>SUBTOTAL</h5>
            </Grid>
            <Grid item xs={3} className={classes.subtotalPrice}>
              <h4>${subTotal}.00</h4>
            </Grid>
          </Grid>

          {/* promo code apply */}
          <Grid container className={classes.subtotalSection}>
            <Grid item xs={7} className={classes.subtotalLabel}>
              <h5>
                PROMOTION CODE <strong>JF10</strong> APPLIED
              </h5>
            </Grid>
            <Grid item xs={3} className={classes.subtotalPrice}>
              <h4>-${discount}</h4>
            </Grid>
          </Grid>

          {/* shipping */}
          <Grid container className={classes.subtotalSection}>
            <Grid item xs={7} className={classes.subtotalLabel}>
              <h5>ESTIMATED SHIPPING*</h5>
              <h6 className={classes.freeShipLbl}>
                You qualify for free shipping because your order is over $50*
              </h6>
            </Grid>
            <Grid item xs={3} className={classes.subtotalPrice}>
              <h4>FREE</h4>
            </Grid>
          </Grid>
          {/* divider */}
          <Grid container>
            <Grid item xs={10}>
              <Divider variant='fullWidth' style={{ marginTop: '1rem' }} />
            </Grid>
          </Grid>
          {/* estimated total */}
          <Grid container className={classes.subtotalSection}>
            <Grid item xs={7} className={classes.subtotalLabel}>
              <h3>ESTIMATED TOTAL</h3>
              <h6 className={classes.freeShipLbl}>
                Tax will be applied during checkout
              </h6>
            </Grid>
            <Grid item xs={3} className={classes.subtotalPrice}>
              <h3>${estimatedTotal}</h3>
            </Grid>
          </Grid>
          {/* divider */}
          <Grid container>
            <Grid item xs={10}>
              <Divider variant='fullWidth' className={classes.divider} />
            </Grid>
          </Grid>
          {/* checkout | continue section */}

          <Grid container className={classes.cocSection}>
            <Grid item xs={5}></Grid>
            <Grid item xs={3} className={classes.fieldItem}>
              <span className={classes.contShopLabel}>
                <u>CONTINUE SHOPPING</u>
              </span>
            </Grid>
            <Grid item xs={4} className={classes.fieldButton}>
              <Button
                className={classes.checkoutButton}
                variant='contained'
                color='primary'
                size='small'
                // onClick={calculateDiscount}
              >
                CHECKOUT
              </Button>
            </Grid>
          </Grid>
          {/* secure checkout */}
          <Grid container className={classes.secureSection}>
            <Grid item xs={4}></Grid>

            <Grid item xs={8} className={classes.secureImgLbl}>
              <img
                src={lock}
                alt='secure checkout'
                className={classes.secureIcon}
                xs={12}
              />
              <h5>Secure checkout. Shopping is always safe & secure</h5>
            </Grid>
          </Grid>
          {/*  */}
        </Grid>
        {/* ---------------------------------------------------------------- */}
      </Grid>
    </Container>
  )
}

export default Checkout
