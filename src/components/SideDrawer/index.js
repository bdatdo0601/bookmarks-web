import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Typography, Drawer, List, Divider } from "material-ui";
import { ListItem, ListItemText } from "material-ui/List";
import { withStyles } from "material-ui/styles";

import styles from "./style";

class SideDrawer extends React.Component {
    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        items: PropTypes.array.isRequired,
        classes: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired,
        onDrawerClose: PropTypes.func.isRequired,
        title: PropTypes.string,
        isMobile: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        title: "Title",
    };

    renderDrawerList = () => {
        const { items } = this.props;
        return (
            <div>
                <List>
                    {items.map(item => (
                        <ListItem key={item.title} button onClick={this.props.onDrawerClose}>
                            <ListItemText
                                primary={
                                    <Typography variant="button" color="inherit">
                                        <a href={item.link} style={{ color: "inherit", textDecoration: "inherit" }}>
                                            {item.title}
                                        </a>
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    };

    renderDrawerWeb = () => {
        const { classes } = this.props;

        return (
            <Drawer
                variant="permanent"
                classes={{
                    paper: classNames(classes.drawerPaperWeb, !this.props.isOpen && classes.drawerPaperClose),
                }}
                open={this.props.isOpen}
                onClose={this.props.onDrawerClose}
            >
                <div className={classes.toolbarWeb} />
                <Divider />
                {this.renderDrawerList()}
            </Drawer>
        );
    };

    renderDrawerMobile = () => {
        const { classes, theme, isOpen } = this.props;
        return (
            <Drawer
                variant="temporary"
                anchor={theme.direction === "rtl" ? "right" : "left"}
                open={isOpen}
                onClose={this.props.onDrawerClose}
                classes={{
                    paper: classes.drawerPaperMobile,
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <div className={classes.toolbarMobile}>
                    <Typography variant="title" color="inherit" className={classes.title}>
                        <a href="/" style={{ color: "inherit", textDecoration: "inherit" }}>
                            {this.props.title}
                        </a>
                    </Typography>
                </div>
                <Divider />
                {this.renderDrawerList()}
            </Drawer>
        );
    };

    render() {
        return this.props.isMobile ? this.renderDrawerMobile() : this.renderDrawerWeb();
    }
}

export default withStyles(styles, { withTheme: true })(SideDrawer);
