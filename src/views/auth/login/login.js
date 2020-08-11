import React from "react";
import "./login.scss";

import { Button, Col, Container, Form, Image, InputGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../../assets/img/logo.svg";

function Login() {
    return (
        <div id="login">
            <Container>
                <Row className="login">
                    <Col xs="12" sm="10" md="10" lg="7" className="login-box">
                        <Row className="justify-content-around">
                            <Image src={logo} />
                            <Form className="login-box__form">
                                <Form.Group className="text-center mb-4">
                                    <h3>Vivere</h3>
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
                                <Form.Group className="mb-3">
                                    <Button variant="primary" block>
                                        <FontAwesomeIcon icon={["far", "sign-in"]} /> Login
                                    </Button>
                                </Form.Group>
                                <Form.Group className="text-center mb-0">
                                    <Form.Label>Esqueceu a senha?</Form.Label>
                                </Form.Group>
                            </Form>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;
