import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { Divider } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'

import t1 from '../assets/T1.jpg'
import Modal from './Modal'

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  mainContainer: {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  gridItem: {},
  item: {
    display: 'flex',
    justifyContent: 'center',
  },
  name: {
    ...theme.typography.h4,
    marginTop: '0.5rem',
    marginBottom: '0.2rem',
    color: '#37474F',
  },
  style: {
    ...theme.typography.h5,
    margin: '0',
    color: '#546E7A',
  },
  color: {
    ...theme.typography.h5,
    margin: '0',
    color: '#546E7A',
  },
  button: {
    ...theme.typography.h5,
    color: '#546E7A',
  },
  label: {
    ...theme.typography,
    paddingLeft: '1rem',
  },

  qtyField: {
    width: '2.5rem',
    height: '1rem',
    marginTop: '1rem',
    marginRight: '1rem',
  },
  price: {
    ...theme.typography.h3,
  },
  mainOverlayContainer: {
    overflow: 'hidden',
  },
  leftOverlayContainer: {},
  prodLabel: {
    ...theme.typography,
    display: 'flex',
    justifyContent: 'center',
    color: '#546E7A',
  },
  itemName: {},
  priceOverlayItem: {
    ...theme.typography,
    display: 'flex',
    justifyContent: 'center',
    color: '#37474F',
  },
  prodLabelItem: {
    ...theme.typography,
    display: 'flex',
    justifyContent: 'center',
    color: '#37474F',
  },
  prodColorItem: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
  },
  color1: {
    height: '1rem',
    width: '1rem',
    backgroundColor: 'red',
  },
  color2: {
    height: '1rem',
    width: '1rem',
    backgroundColor: 'green',
  },
  sizeQtyItem: {
    display: 'flex',
    direction: 'column',
    justifyContent: 'center',
    marginTop: '1rem',
  },
  formControl: {
    borderRadius: '0',
  },
  editContainer: {
    margin: '1rem',
  },
  editItem: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '-1rem',
  },
  prodLbl: {
    ...theme.typography,
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '-1rem',
    marginTop: '-0.8rem',
  },
  editButton: {
    borderRadius: '0',
    width: '50%',
    height: '3rem',
  },
  overlayImageConatiner: {
    display: 'flex',
    justifyContent: 'center',
  },
  overlayImage: {
    width: '100%',
    height: '100%',
  },
}))

// close icon

const Item = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [fullWidth, setFullWidth] = React.useState(true)
  const [maxWidth, setMaxWidth] = React.useState('sm')
  const [size, setSize] = React.useState('')
  const [qty, setQty] = React.useState('')
  const [btnText, setBtnText] = React.useState('EDIT')
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = (e) => {
    setBtnText('EDIT')
    setOpen(false)
  }
  const handleSizeChange = (event) => {
    setSize(event.target.value)
  }
  const handleQtyChange = (event) => {
    setQty(event.target.value)
  }
  const handleAddToBag = () => {
    setBtnText('ADD TO BAG')
  }
  return (
    <Container>
      <Grid container className={classes.mainContainer} spacing={1}>
        {/* item image */}
        <Grid item className={classes.gridItem} xs={2}>
          <Grid container direction='column'>
            <Grid item className={classes.item}>
              <img
                src={t1}
                alt='solid green cotton shirt'
                className={classes.itemImage}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* item details */}
        <Grid item className={classes.gridItem} xs={5}>
          <Grid container direction='column'>
            <Grid item className={classes.label}>
              <h4 className={classes.name}>SOLID GREEN COTTON TSHIRT</h4>
            </Grid>
            <Grid item className={classes.label}>
              <h5 className={classes.style}>Style #: MS13KT1906</h5>
            </Grid>
            <Grid item className={classes.label}>
              <h5 className={classes.color}>Colour:Blue</h5>
            </Grid>
            {/*  */}
            <div style={{ marginTop: '2rem' }}></div>
            {/* buttons */}
            <Grid container>
              <Grid item>
                <Button className={classes.button} onClick={handleOpen}>
                  EDIT
                </Button>
                <span>{'|'}</span>
              </Grid>
              <Grid item>
                <Button className={classes.button}> X REMOVE </Button>
                <span>{'|'}</span>
              </Grid>
              <Grid item>
                <Button className={classes.button}> SAVE FOR LATER</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* size */}
        <Grid item className={classes.gridItem} xs={1}>
          <Grid container direction='column'>
            <Grid item className={classes.label}>
              <h4 className={classes.size}>S</h4>
            </Grid>
          </Grid>
        </Grid>
        {/* quatity */}
        <form>
          <Grid item className={classes.gridItem} xs={2}>
            <Grid container direction='column'>
              <Grid item className={classes.qtyFieldContainer}>
                <TextField
                  size='small'
                  disabled
                  id='qtyField'
                  label='1'
                  variant='outlined'
                  className={classes.qtyField}
                />
              </Grid>
            </Grid>
          </Grid>
        </form>
        {/* price */}
        <Grid item className={classes.gridItem} xs={2}>
          <Grid container direction='column'>
            <Grid item className={classes.label}>
              <h3 className={classes.price}>$11.00</h3>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* dialog */}
      {/*    */}
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby='aria-labelledby="customized-dialog-title'
      >
        <Container>
          <Grid container className={classes.mainOverlayContainer} spacing={1}>
            {/* product info */}
            <Grid item className={classes.leftOverlayContainer} xs={6}>
              {/* divider */}
              <Grid container dorection='row'>
                {/* divider */}
                <Grid item xs={10} classname={classes.overlayDivider}>
                  <Divider
                    variant='center'
                    style={{
                      marginTop: '1rem',
                      height: '0.5rem',
                      marginLeft: '2rem',
                    }}
                  />
                </Grid>
              </Grid>
              {/* product name */}
              <Grid container direction='column'>
                <Grid item className={classes.prodLabel}>
                  <h4
                    id='customized-dialog-title'
                    onClose={handleClose}
                    className={classes.itemName}
                  >
                    PAISLEY JEAN
                  </h4>
                  <IconButton
                    aria-label='close'
                    className={classes.closeButton}
                    onClick={handleClose}
                  >
                    <CloseIcon />
                  </IconButton>
                </Grid>
                {/* price */}
                <Grid item className={classes.priceOverlayItem}>
                  <h2 className={classes.priceOverlayPrice}>$21.00</h2>
                </Grid>
              </Grid>
              {/* item color */}
              <Grid
                container
                direction='column'
                className={classes.itemColorContainer}
              >
                <Grid item className={classes.prodLabelItem}>
                  <h5 className={classes.priceOverlayPrice}>PAISLEY</h5>
                </Grid>
                <Grid item className={classes.prodColorItem}>
                  <div className={classes.color1} />
                  <span style={{ margin: '0.2rem' }} />
                  <div className={classes.color2} />
                </Grid>
              </Grid>
              {/* size qty */}

              <Grid
                container
                direction='column'
                className={classes.sizeQtyContainer}
              >
                <Grid item className={classes.sizeQtyItem}>
                  {/* Size */}
                  <FormControl
                    variant='outlined'
                    className={classes.formControl}
                  >
                    <InputLabel id='demo-simple-select-outlined-label'>
                      Size
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-outlined-label'
                      id='demo-simple-select-outlined'
                      value={size}
                      onChange={handleSizeChange}
                      label='Size'
                    >
                      <MenuItem value=''>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <span style={{ margin: '0.2rem' }} />

                  {/* QTY */}
                  <FormControl
                    variant='outlined'
                    className={classes.formControl}
                  >
                    <InputLabel id='demo-simple-select-outlined-label'>
                      QTY
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-outlined-label'
                      id='demo-simple-select-outlined'
                      value={qty}
                      onChange={handleQtyChange}
                      label='Qty'
                    >
                      <MenuItem value=''>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              {/* edit */}
              <Grid
                container
                direction='column'
                className={classes.editContainer}
              >
                <Grid item className={classes.editItem} xs={12}>
                  <Button
                    variant='contained'
                    color='primary'
                    className={classes.editButton}
                  >
                    {btnText}
                  </Button>
                </Grid>
                <Grid item className={classes.prodLbl}>
                  <h6>
                    <a
                      href='#'
                      style={{ color: '#37474F' }}
                      onClick={handleAddToBag}
                    >
                      See product details
                    </a>
                  </h6>
                </Grid>
              </Grid>
              {/* section one grid */}
            </Grid>

            {/* product image */}
            <Grid item className={classes.rightOverlayContainer} xs={6}>
              <Grid container direction='column'>
                <Grid item className={classes.overlayImageConatiner} xs={12}>
                  <img
                    src={t1}
                    alt='solid green cotton shirt'
                    className={classes.overlayImage}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Dialog>
    </Container>
  )
}

export default Item
