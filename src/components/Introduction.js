import React, { Component } from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';
import introImg from '../assets/img/introduction.svg';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Introduction extends Component {
    render() {
        return (
            <div id="introduction">
                <Jumbotron>
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <Container>
                            <Row>
                                <Col>
                                    <h1>Hello World!</h1>
                                    <p>
                                        Welcome to AlgoEasy.IO,
                                </p>
                                    <p>
                                        a simple web app where you can learn programming online.
                                </p>
                                    <p>
                                        We'll show you what to learn to code.
                                </p>
                                    <p>
                                        <Button variant="primary" href="https://refactory.id">Get Started</Button>
                                    </p>
                                </Col>
                                <Col md="auto">
                                    <img src={introImg} alt="code" />
                                </Col>
                            </Row>
                        </Container>
                    </ScrollAnimation>
                </Jumbotron>
            </div>
        )
    }
}
