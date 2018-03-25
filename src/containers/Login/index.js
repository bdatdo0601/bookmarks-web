import React, { Component } from "react";
import MainLayout from "../../layouts/MainLayout";

import LoginComponent from "../../components/login/login-component";

class Login extends Component {
    render() {
        return (
            <MainLayout>
                <LoginComponent />
            </MainLayout>
        );
    }
}

export default Login;
