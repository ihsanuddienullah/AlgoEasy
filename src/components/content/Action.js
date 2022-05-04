import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default class Action extends Component {
    render() {
        return (
            <div id="action">
                <div className="action-desc">
                    <Container>
                        <Row>
                            <Col>
                                <h3>Ready to become an awesome programmer?</h3>
                                <p>Let's learn to code, learn to be creative!</p>
                                <Button variant="primary" href="https://www.w3schools.com/">Start Learning</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
