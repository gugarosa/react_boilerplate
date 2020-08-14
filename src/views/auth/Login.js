import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Container, Form, Image, InputGroup, Row } from "react-bootstrap";

import { AuthContext } from "../../context/Auth";

import "./auth.scss";
import logo from "../../assets/img/logo.svg";

export const Login = () => {
    const { state, login, logout } = useContext(AuthContext);

    return (
        <div id="login">
            <Container>
                <Row className="login">
                    <Col xs="12" sm="12" md="10" lg="7" className="login-box">
                        <Row className="justify-content-around">
                            <Image src={logo} />
                            <div className="login-box__divider d-none d-sm-block"></div>
                            <Form className="login-box__form">
                                <Form.Group className="text-center mb-4">
                                    <h3>Humana Alimentar</h3>
                                    <span className="text-muted">Painel de Admnistração</span>
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                <FontAwesomeIcon icon={["far", "envelope"]} />
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="email" placeholder="E-mail" />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="password">
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                <FontAwesomeIcon icon={["far", "lock"]} />
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="password" placeholder="Senha" />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="mb-2">
                                    <Button
                                        className="text-uppercase font-weight-bold"
                                        variant="primary"
                                        block
                                        onClick={() => login()}
                                    >
                                        Login
                                    </Button>
                                    <Button
                                        className="text-uppercase font-weight-bold"
                                        variant="danger"
                                        block
                                        onClick={() => logout()}
                                    >
                                        Logout
                                    </Button>
                                </Form.Group>
                                <Form.Group className="text-center mb-0">
                                    <Button variant="link">Esqueceu a senha?</Button>
                                </Form.Group>
                                State: {state.isAuthorized.toString()}
                            </Form>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
