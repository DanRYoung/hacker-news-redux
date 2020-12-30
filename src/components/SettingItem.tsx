import * as React from "react";
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";
import { Theme } from "@material-ui/core";
import clsx from "clsx";
import { darken } from "@material-ui/core/styles";

export interface SettingItemProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

const SettingItem = (props: SettingItemProps) => {
  const classes = withStyles();

  const { title, description, className, children } = props;
  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.info}>
        <div className={classes.title}>{title}</div>
        <div className={classes.description}>{description}</div>
      </div>
      <div className={classes.children}>{children}</div>
    </div>
  );
};

const withStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "max-content 1fr",
    gridGap: theme.spacing(3),
  },
  info: {},
  title: {},
  description: {
    color: darken(theme.palette.text.primary, 0.2),
  },
  children: {
    justifySelf: "right",
  },
}));

export default SettingItem;
