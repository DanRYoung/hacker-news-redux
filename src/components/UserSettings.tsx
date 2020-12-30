import * as React from "react";
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";
import {
  FormControlLabel,
  IconButton,
  lighten,
  Switch,
  Theme,
} from "@material-ui/core";
import CloseOutlined from "@material-ui/icons/CloseOutlined";
import { forwardRef } from "react";
import SettingItem from "./SettingItem";

export interface UserSettingsProps {
  onClose: () => void;
}

const UserSettings = forwardRef(
  (props: UserSettingsProps, ref: React.Ref<HTMLDivElement>) => {
    const classes = withStyles();
    const { onClose, ...rest } = props;
    return (
      <div className={classes.root} {...rest} ref={ref}>
        <div className={classes.buttonPanel}>
          <IconButton
            size="small"
            onClick={onClose}
            className={classes.closeButton}
          >
            <CloseOutlined />
          </IconButton>
        </div>
        <SettingItem
          title="Theme"
          description="Set the global color theme"
          className={classes.setting}
        >
          <FormControlLabel
            control={
              <Switch
              // checked={state.gilad}
              // onChange={handleChange}
              />
            }
            label="Dark"
          />
        </SettingItem>
      </div>
    );
  }
);

const withStyles = makeStyles((theme: Theme) => ({
  root: {
    // display: "grid",
    background: lighten(theme.palette.background.default, 0.2),
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    height: "max-content",
  },
  buttonPanel: {
    display: "grid",
    justifyContent: "end",
    paddingBottom: theme.spacing(2),
  },
  closeButton: {
    justifySelf: "end",
    width: "max-content",
    height: "max-content",
  },
  setting: {
    minWidth: 400,
  },
}));

export default UserSettings;
