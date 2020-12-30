import * as React from "react";
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";
import { Theme } from "@material-ui/core";

export interface LogoProps {}

const Logo = (props: LogoProps) => {
  const classes = withStyles();
  return (
    <span className={classes.root}>
      <span className={classes.hot}>Hacker News</span>
      <span className={classes.cold}>Redux</span>
    </span>
  );
};

const withStyles = makeStyles((theme: Theme) => ({
  root: {
    fontSize: "1.2em",
    height: "max-content",
  },
  hot: {
    color: "#ff6600",
  },
  cold: {
    color: "#d3d3d3",
    paddingLeft: theme.spacing(0.5),
  },
}));

export default Logo;
