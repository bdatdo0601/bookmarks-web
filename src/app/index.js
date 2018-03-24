import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CssBaseline, MuiThemeProvider } from "material-ui";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createMuiTheme } from "material-ui/styles";

import "./index.css";

import { MAIN_ROUTES, ERROR_ROUTES } from "../routes";
import { GlobalActions } from "../redux/actions/GlobalActions";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#819ca9",
            main: "#546e7a",
            dark: "#29434e",
            contrastText: "#fff",
        },
        secondary: {
            light: "#80e27e",
            main: "#4caf50",
            dark: "#087f23",
            contrastText: "#000",
        },
    },
});

class App extends Component {
    static propTypes = {
        checkMobileSize: PropTypes.func.isRequired,
        changeSize: PropTypes.func.isRequired,
    };

    componentWillMount() {
        window.addEventListener("resize", () => {
            this.props.checkMobileSize();
        });
        this.props.changeSize();
        this.props.checkMobileSize();
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Switch>
                        {MAIN_ROUTES.map(ROUTE => (
                            <Route key={ROUTE.PATH} exact={ROUTE.EXACT} path={ROUTE.PATH} component={ROUTE.COMPONENT} />
                        ))}
                        {ERROR_ROUTES.map(ROUTE => (
                            <Route key={ROUTE.PATH} exact={ROUTE.EXACT} path={ROUTE.PATH} component={ROUTE.COMPONENT} />
                        ))}
                    </Switch>
                </Router>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    return { ...state.GlobalReducer };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...GlobalActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
