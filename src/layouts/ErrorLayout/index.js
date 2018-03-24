import React, { Component } from "react";
import PropTypes from "prop-types";

class ErrorLayout extends Component {
    static propTypes = {
        children: PropTypes.node,
    };

    static defaultProps = {
        children: <h1>Content</h1>,
    };

    render() {
        return <div>{this.props.children}</div>;
    }
}

export default ErrorLayout;
