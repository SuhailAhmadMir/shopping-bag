import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
  },
  gridItem: {},
  imgContainer: {},
  item1: {
    alignSelf: "center",
  },
  item3: {
    alignSelf: "flex-end",
  },
  item4: {
    alignSelf: "center",
  },
  label: {
    ...theme.typography,
    display: "flex",
    justifyContent: "flex-start",
    marginRight: "3rem",
  },
  headerLabel: {
    ...theme.typography,
    fontSize: "3rem",
    fontWeight: theme.typography.fontWeightBold,
    color: "#37474F",
    marginLeft: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.6rem",
      fontWeight: theme.typography.fontWeightBold,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
    },
  },
}));
const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme(); // gives access to default theme within component
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const header = (
    <React.Fragment>
      <Grid container className={classes.mainContainer} spacing={2}>
        {/* item image */}
        <Grid item className={classes.gridItem} xs={2}>
          <Grid container direction="column" className={classes.imgContainer}>
            <Grid item className={classes.item1}>
              <h4 className={classes.label}>{props.numberOfProducts} ITEMS</h4>
            </Grid>
          </Grid>
        </Grid>
        {/* item details */}
        <Grid item xs={5}>
          <Grid container direction="column">
            <Grid item className={classes.item2}>
              {" "}
              <span style={{ marginLeft: "2rem" }}></span>
            </Grid>
          </Grid>
        </Grid>
        {/* size */}
        <Grid item className={classes.gridItem} xs={1}>
          <Grid container direction="column">
            <Grid item className={classes.item3}>
              <h4 className={classes.label}>SIZE</h4>
            </Grid>
          </Grid>
        </Grid>
        {/* quatity */}

        <Grid item className={classes.gridItem} xs={2}>
          <Grid container direction="column">
            <Grid item className={classes.item4}>
              <h4 className={classes.label} style={{ marginLeft: "1.2rem" }}>
                QTY
              </h4>
            </Grid>
          </Grid>
        </Grid>

        {/* price */}
        <Grid item className={classes.gridItem} xs={2}>
          <Grid container direction="column">
            <Grid item className={classes.item5}>
              <h4 className={classes.label}>PRICE</h4>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider
        variant="fullWidth"
        style={{
          height: "0.5rem",
          marginLeft: "2rem",
          marginBottom: "2rem",
        }}
      />
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <div classnme={classes.mainLbl}>
        <span className={classes.headerLabel}>YOUR SHOPPING BAG</span>
      </div>

      <Divider
        variant="fullWidth"
        style={{
          marginTop: "1rem",
          height: "0.1rem",
          marginLeft: "2rem",
        }}
      />
      {matches ? null : header}
    </React.Fragment>
  );
};

export default Header;
