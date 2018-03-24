import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { AppBar, Toolbar, Typography, IconButton, withStyles } from "material-ui";
import { Menu as MenuIcon } from "material-ui-icons";

import SideDrawer from "../SideDrawer";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appBarWeb: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    appBarMobile: {
        position: "absolute",
        marginLeft: drawerWidth,
        [theme.breakpoints.up("md")]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    toolbar: {
        backgroundColor: "transparent",
    },
});

class GlobalHeader extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        title: PropTypes.string,
        isMobile: PropTypes.bool,
        quickLinks: PropTypes.array,
        isVisible: PropTypes.bool,
    };

    static defaultProps = {
        title: "Title",
        isMobile: false,
        quickLinks: [],
        isVisible: true,
    };

    state = {
        isDrawerOpen: false,
    };

    toggleDrawer = () => {
        this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
    };

    renderMenuButton = () => (
        <IconButton
            className={this.props.classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={this.toggleDrawer}
        >
            <MenuIcon />
        </IconButton>
    );

    render() {
        const { classes, isMobile } = this.props;
        if (!this.props.isVisible) return null;
        return (
            <div>
                <AppBar
                    position="absolute"
                    className={
                        isMobile
                            ? classes.appBarMobile
                            : classNames(classes.appBarWeb, this.state.isDrawerOpen && classes.appBarShift)
                    }
                >
                    <Toolbar>
                        {this.renderMenuButton()}
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            <a href="/" style={{ color: "inherit", textDecoration: "inherit" }}>
                                {this.props.title}
                            </a>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <SideDrawer
                    title={this.props.title}
                    items={this.props.quickLinks}
                    isOpen={this.state.isDrawerOpen}
                    onDrawerClose={this.toggleDrawer}
                    isMobile={this.props.isMobile}
                />
            </div>
        );
    }
}

export default withStyles(styles)(GlobalHeader);
