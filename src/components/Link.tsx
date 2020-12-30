import * as React from "react";
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";
import { lighten, Theme } from "@material-ui/core";
import clsx from "clsx";

export interface LinkProps {
  children?: React.ReactNode;
  className?: string;
  to: string;
}

const Link = (props: LinkProps) => {
  const classes = withStyles();
  const { children, className, to } = props;
  return (
    <a className={clsx(classes.root, className)} href={to}>
      {children}
    </a>
  );
};

const withStyles = makeStyles((theme: Theme) => ({
  root: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      color: lighten(theme.palette.text.primary, 0.5),
    },
  },
}));

export default Link;
