import React, { Component } from "react";
import { Container, Row, Col, Card, CardDeck, Form, Button, Alert } from "react-bootstrap";
import contactImg from "../../assets/img/contact-us.svg";
import ScrollAnimation from "react-animate-on-scroll";

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            submit: false
        }
    }

    handleSubmit = (e) => {
        this.setState({submit: !this.state.submit})
        e.preventDefault();
    }

    render() {
        return (
            <div id="contact-us">
                <Container className="mb-5 mt-3">
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <h1>Contact Us</h1>
                        <Row>
                            <Col>
                                <CardDeck>
                                    <Card
                                        text="white"
                                        style={{ width: "18rem" }}
                                    >
                                        <Form onSubmit={this.handleSubmit}>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Enter Email"
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    placeholder="Enter Message"
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicCheckbox"></Form.Group>
                                            <Button
                                                variant="primary"
                                                type="submit"                                                                                            
                                            >
                                                Submit
                                            </Button>
                                            {this.state.submit && <Alert variant="success">Message Sent</Alert>}                                
                                        </Form>
                                    </Card>
                                </CardDeck>
                            </Col>
                            <Col>
                                <img src={contactImg} alt="code" />
                            </Col>
                        </Row>
                    </ScrollAnimation>
                </Container>
            </div>
        );
    }
}
