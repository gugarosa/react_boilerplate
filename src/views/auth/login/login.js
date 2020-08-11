import React from "react";
import "./login.scss";

import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
    return (
        <Container>
            <Row className="login">
                <Col xs="12" sm="8" md="6" lg="5" xl="4" className="login-form">
                    <Form className="login-form__wrapper">
                        <Form.Group controlId="email">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Digite o e-mail" />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group>
                        <Form.Row className="justify-content-between">
                            <Form.Group controlId="rememberMe">
                                <Form.Check label="Lembrar-me" />
                            </Form.Group>
                            <Form.Group controlId="rememberMe">
                                <Form.Label>Esqueceu a senha?</Form.Label>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className="justify-content-center">
                            <Button variant="primary">
                                <FontAwesomeIcon icon={["fal", "sign-in-alt"]} /> Login
                            </Button>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
