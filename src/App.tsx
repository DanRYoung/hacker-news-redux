import { makeStyles } from "@material-ui/core";

import React from "react";

import Navbar from "./components/Navbar";
import { MAX_PAGE_WIDTH } from "./style/theme";
import FrontPage from "./components/FrontPage";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <FrontPage />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    maxWidth: MAX_PAGE_WIDTH,
    margin: "0 auto",
  },
  stories: {
    display: "grid",
    gridGap: theme.spacing(2),
  },
}));

export default App;
