import React from "react";
import {Route} from "react-router-dom";
import LoginForm from "../../modules/LoginForm/components/LoginForm";
import RegisterForm from "../../modules/RegisterForm/components/RegisterForm";

import "./Auth.scss";

const Auth = () => (
    <section className="auth">
        <div className="auth__content">
            <Route exact path="/signin" component={LoginForm} />
            <Route exact path="/signup" component={RegisterForm} />
        </div>
    </section>
);

export default Auth;