import React, { Component } from "react";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";
import lessonImg from '../../assets/img/lesson.svg';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Lesson extends Component {
    render() {
        return (
            <div id="lesson">
                <Container className="mb-5 mt-5">
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <Row>
                            <Col>
                                <img src={lessonImg} alt="code" />
                            </Col>
                            <Col>
                                <CardDeck>
                                    <Card
                                        text="white"
                                        style={{ width: "18rem" }}
                                    >
                                        <Card.Header>HTML</Card.Header>
                                        <Card.Body>
                                            <Card.Title>
                                                Hypertext Markup Language{" "}
                                            </Card.Title>
                                            <Card.Text>
                                                Hypertext Markup Language (HTML) is
                                                the standard markup language for
                                                documents designed to be displayed
                                                in a web browser.
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card
                                        text="white"
                                        style={{ width: "18rem" }}
                                    >
                                        <Card.Header>CSS</Card.Header>
                                        <Card.Body>
                                            <Card.Title>
                                                Cascading Style Sheet
                                        </Card.Title>
                                            <Card.Text>
                                                Cascading Style Sheets (CSS) is a
                                                style sheet language used for
                                                describing the presentation of a
                                                document written in a markup
                                                language such as HTML.
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </CardDeck>
                            </Col>
                        </Row>
                    </ScrollAnimation>
                </Container>
            </div>
        );
    }
}
