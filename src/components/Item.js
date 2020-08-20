import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import t1 from '../assets/T1.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainContainer: {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  gridItem: {
    // padding: '0.8rem',
    // marginLeft: '1rem',
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
  },
  price: {
    ...theme.typography.h3,
  },
}))

const Item = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container className={classes.mainContainer} spacing={1}>
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

            <Grid container>
              <Grid item>
                <Button className={classes.button}>EDIT</Button>
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
              <Grid item>
                <TextField
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
    </div>
  )
}

export default Item
