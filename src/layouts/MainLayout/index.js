import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from "material-ui";

import { GlobalActions } from "../../redux/actions/GlobalActions";
import GlobalHeader from "../../components/GlobalHeader";
import "./index.css";

const styles = theme => ({
    rootMobile: {
        flexGrow: 1,
        height: "100%",
        width: "100%",
    },
    rootWeb: {
        height: "100%",
        zIndex: 1,
        width: "100%",
        overflow: "auto",
        position: "relative",
        display: "flex",
    },
    contentWeb: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        height: "100%",
        width: "90%",
    },
    toolbarWeb: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar,
    },
    contentMobile: {
        height: "100%",
    },
    toolbarMobile: theme.mixins.toolbar,
});

class MainLayout extends Component {
    static propTypes = {
        children: PropTypes.node,
        title: PropTypes.string,
        isMobile: PropTypes.bool,
        classes: PropTypes.object.isRequired,
    };

    static defaultProps = {
        children: <h1>Content</h1>,
        title: "Project Dashboard",
        isMobile: false,
    };

    render() {
        const { classes, isMobile } = this.props;
        return (
            <div className={isMobile ? classes.rootMobile : classes.rootWeb}>
                <GlobalHeader title={this.props.title} isMobile={this.props.isMobile} />
                <main className={!isMobile ? classes.contentWeb : classes.contentMobile}>
                    <div className={!isMobile ? classes.toolbarWeb : classes.toolbarMobile} />
                    {this.props.children}
                </main>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { ...state.GlobalReducer };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...GlobalActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(MainLayout));
