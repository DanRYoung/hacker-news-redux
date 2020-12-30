import * as React from "react";
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";
import { Modal, Theme } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import Logo from "./Logo";
import { useState } from "react";
import UserSettings from "./UserSettings";

export interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  const classes = withStyles();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleClose = () => setIsSettingsOpen(false);
  const handleOpen = () => setIsSettingsOpen(true);

  return (
    <div className={classes.root}>
      <Logo />
      <div className={classes.navigationButtons}>
        <IconButton size="small" onClick={handleOpen}>
          <SettingsIcon />
        </IconButton>
        <IconButton size="small">
          <InfoOutlinedIcon />
        </IconButton>
      </div>
      <Modal
        open={isSettingsOpen}
        onClose={handleClose}
        className={classes.settingsModal}
      >
        <UserSettings onClose={handleClose} />
      </Modal>
    </div>
  );
};

const withStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "max-content 1fr",
    // width: MAX_PAGE_WIDTH,
    padding: `${theme.spacing(2)}px 0`,
    alignItems: "center",
  },
  navigationButtons: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    justifySelf: "right",
    gridGap: theme.spacing(1),
  },
  settingsModal: {
    display: "grid",
    width: "max-content",
    height: "max-content",
    margin: "0 auto",
  },
}));

export default Navbar;
