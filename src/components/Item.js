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

  item: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  name: {
    ...theme.typography.h4,
    textTransform: 'uppercase',
    marginTop: '0.5rem',
    marginBottom: '0.2rem',
    color: '#37474F',
  },
  style: {
    ...theme.typography.h5,
    textTransform: 'uppercase',

    margin: '0',
    color: '#546E7A',
  },
  color: {
    ...theme.typography.h5,
    margin: '0',
    color: '#546E7A',
    textTransform: 'uppercase',
  },
  button: {
    ...theme.typography.h5,
    color: '#546E7A',
  },
  label: {
    ...theme.typography,
    paddingLeft: '-1rem',
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
  itemName: {
    textTransform: 'uppercase',
  },
  priceOverlayItem: {
    ...theme.typography,
    display: 'flex',
    justifyContent: 'center',
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
    // backgroundColor: 'red',
  },
  color2: {
    height: '1rem',
    width: '1rem',
    // backgroundColor: 'green',
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
    marginTop: '20%',
  },
  itemImage: {
    maxWidth: '100%',
    height: '100%',
  },
  size: {
    textTransform: 'uppercase',
    justifyContent: 'center',
  },
  qtyFieldContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  qtyField: {
    width: '2.5rem',

    justifyContent: 'flex-end',
    alighItems: 'center',
  },
  price: {
    ...theme.typography.h3,
  },
  pName: {
    textTransform: 'uppercase',
  },
  detailSection: {
    paddingLeft: '1rem',
    paddingRiht: '1rem',
  },
  crudBtn: {
    marginLeft: '-1rem',
  },
}))

// close icon

const Item = (props) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [fullWidth, setFullWidth] = React.useState(true)
  const [maxWidth, setMaxWidth] = React.useState('sm')
  const [size, setSize] = React.useState(
    `${props.products.p_selected_size.code}`
  )
  const [qty, setQty] = React.useState(`${props.products.p_quantity}`)
  const [btnText, setBtnText] = React.useState('EDIT')
  const [producId, setProductId] = React.useState('')

  const handleOpen = () => {
    setProductId(props.products.p_id)

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

  const handleEdit = () => {
    props.handleEdit(size, producId, qty)
    setOpen(false)
  }

  return (
    <Container>
      <Grid container className={classes.mainContainer} spacing={2}>
        {/* item image */}
        <Grid item className={classes.gridItem} xs={2}>
          <Grid container direction='column'>
            <Grid item className={classes.item}>
              <img
                src={props.images}
                alt='solid green cotton shirt'
                className={classes.itemImage}
                xs={12}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* item details */}
        <Grid item className={classes.gridItem} xs={5}>
          <Grid container direction='column' className={classes.detailSection}>
            <Grid item className={classes.label}>
              <h4 className={classes.name}>
                {props.products.p_variation}
                <span style={{ marginLeft: '0.3rem' }}></span>{' '}
                {props.products.p_name}
              </h4>
              <h5 className={classes.style}>
                Style #: {props.products.p_style}
              </h5>
              <h5 className={classes.color}>
                Colour:{props.products.p_selected_color.name}
              </h5>
            </Grid>

            {/*  */}
            <div style={{ marginTop: '2rem' }}></div>
            {/* buttons */}
            <Grid container className={classes.crudBtn}>
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
              <h4 className={classes.size}>
                {props.products.p_selected_size.code}
              </h4>
            </Grid>
          </Grid>
        </Grid>
        {/* quatity */}
        <Grid item className={classes.gridItem} xs={2}>
          <Grid container direction='column'>
            <Grid item className={classes.qtyFieldContainer}>
              <TextField
                size='small'
                disabled
                id='qtyField'
                label={props.products.p_quantity}
                variant='outlined'
                className={classes.qtyField}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* price */}
        <Grid item className={classes.gridItem} xs={2}>
          <Grid container direction='column'>
            <Grid item className={classes.label}>
              <h3 className={classes.price}>${props.products.p_price}.00</h3>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* divider */}

      <hr
        style={{
          marginTop: '3rem',
          marginBottom: '3rem',
          marginLeft: '2rem',
          backgroundColor: '#FAFAFA',
          color: '#FAFAFA',
        }}
      />

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
                    {props.products.p_variation}
                    <span style={{ marginLeft: '0.3rem' }}></span>{' '}
                    {props.products.p_name}
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
                  <h2 className={classes.priceOverlayPrice}>
                    ${props.products.p_price}.00
                  </h2>
                </Grid>
              </Grid>
              {/* item color */}
              <Grid
                container
                direction='column'
                className={classes.itemColorContainer}
              >
                <Grid item className={classes.prodLabelItem}>
                  <h5 className={classes.pName}>{props.products.p_name}</h5>
                </Grid>
                <Grid item className={classes.prodColorItem}>
                  {/* selected color */}
                  <div
                    className={classes.color2}
                    style={{
                      backgroundColor: `${props.products.p_selected_color.hexcode}`,
                      border: '3px solid',
                    }}
                  />

                  {/* available colors */}
                  {props.products.p_available_options.colors.map((color) => (
                    <div
                      className={classes.color1}
                      style={{
                        backgroundColor: `${color.hexcode}`,
                        marginLeft: '0.8rem',
                      }}
                    />
                  ))}
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
                      label='Size'
                      onChange={handleSizeChange}
                    >
                      {props.products.p_available_options.sizes.map((item) => {
                        return (
                          <MenuItem value={item.code}>{item.code}</MenuItem>
                        )
                      })}
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
                      <MenuItem value={props.products.p_quantity}>
                        {props.products.p_quantity}
                      </MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
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
                    onClick={handleEdit}
                  >
                    {btnText}
                  </Button>
                </Grid>
                <Grid item className={classes.prodLbl}>
                  <h6>
                    <span
                      href='#'
                      style={{ color: '#37474F', cursor: 'pointer' }}
                      onClick={handleAddToBag}
                    >
                      <u>See product details</u>
                    </span>
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
                    src={props.images}
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
