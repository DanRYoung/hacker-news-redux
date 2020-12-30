import * as React from "react";
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";
import { darken, Theme } from "@material-ui/core";
import StoryType from "../types/Story";
import Link from "./Link";
import clsx from "clsx";

export interface StoryProps {
  story: StoryType;
  className?: string;
}

const Story = (props: StoryProps) => {
  const classes = withStyles();
  const { story, className } = props;
  return (
    <div className={clsx(classes.root, className)} key={story.id}>
      <div className={classes.score}>{story.score}</div>
      <div className={classes.content}>
        <Link className={classes.title} to={story.url}>
          {story.title}
        </Link>
        <div className={classes.detailsPanel}>
          <span className={classes.author}>{story.by}</span>
          <span className={classes.divider}>•</span>
          <span className={classes.time}>{story.time.fromNow()}</span>
        </div>
      </div>
    </div>
  );
};

const withStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "60px 1fr",
    gridGap: theme.spacing(2),
  },
  content: {},
  title: {
    fontSize: "1.4rem",
  },
  author: {},
  detailsPanel: {
    color: darken(theme.palette.text.primary, 0.2),
  },
  score: {
    display: "grid",
    alignContent: "center",
    justifyContent: "end",
    fontSize: "1.4em",
    color: "#868b95",
  },
  time: {},
  divider: {
    padding: `0 ${theme.spacing(0.5)}px`,
  },
  url: {},
}));

export default Story;
