import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";

import {Block, Button} from "../../../components";

const RegisterForm = props => {
    const {
        handleSubmit,
    } = props;
    return (
        <div>
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <Block>
                <Form onSubmit={handleSubmit} className="login-form">
                    <Form.Item>
                        <Input
                            id="email"
                            size="large"
                            placeholder="E-Mail"
                        />
                    </Form.Item>
                    <Form.Item>                    >
                        <Input
                            size="large"
                            type="password"
                            placeholder="Пароль"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            size="large"
                        >
                            Войти в аккаунт
                        </Button>
                    </Form.Item>
                    <Link className="auth__register-link" to="/signup">
                        Зарегистрироваться
                    </Link>
                </Form>
            </Block>
        </div>
    );
};

export default RegisterForm;