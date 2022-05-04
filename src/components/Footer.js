import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col className="m-auto">
                                <h3>AlgoEasy.IO</h3>                               
                            </Col>
                            <Col md="auto">
                                <p>
                                    Copyright © 2021 Muhammad Ihsanuddienullah | All rights reserved
                                </p>
                                <p>
                                    Ihsanuddienullah@algoeasy.io
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}
