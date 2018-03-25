import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";

function RaisedButtons(props) {
    const { classes } = props;
    return (
        <div>
            <label htmlFor="raised-button-file">
                <Button variant="raised" component="span" className={classes.button}>
                    Login
                </Button>
            </label>
        </div>
    );
}

RaisedButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RaisedButtons);
