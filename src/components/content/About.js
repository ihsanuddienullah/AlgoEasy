import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class About extends Component {
    render() {
        return (
            <div id="about-us">
                <div className="about-desc">
                    <Container>
                        <Row>
                            <Col>
                                <h1>About Us</h1>
                                <p>
                                    About AlgoEasy.IO When we started AlgoEasy.IO, our goal
                                    was to give anyone in the world the ability to learn the
                                    skills they’d need to succeed in the 21st century. We
                                    set out to create a new, interactive way of learning —
                                    making it engaging, flexible, and accessible for as many
                                    people as possible. Since then, we have helped millions
                                    of people worldwide unlock modern technical skills and
                                    reach their full potential through code.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
