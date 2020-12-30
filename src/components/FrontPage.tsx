import * as React from "react";
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";
import { Theme } from "@material-ui/core";
import useStories from "../hooks/use-stories";
import Story from "./Story";

export interface FrontPageProps {}

const FrontPage = (props: FrontPageProps) => {
  const stories = useStories({ skip: 0, count: 10 });
  const classes = withStyles();
  return (
    <div className={classes.root}>
      {stories.map((story) => (
        <Story key={story.id} story={story} />
      ))}
    </div>
  );
};

const withStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "grid",
    gridGap: theme.spacing(2),
  },
}));

export default FrontPage;
