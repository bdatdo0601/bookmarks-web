import React, { Component } from "react";
import ErrorLayout from "../../layouts/ErrorLayout";

class Errors extends Component {
    render() {
        return (
            <ErrorLayout>
                <h3>404 page not found</h3>
                <p>We are sorry but the page you are looking for does not exist.</p>
            </ErrorLayout>
        );
    }
}

export default Errors;
