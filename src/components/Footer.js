import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h3>AlgoEasy.IO</h3>
                                <p>
                                    by Xapiens Teknologi Indonesia
                                </p>
                            </Col>
                            <Col md="auto">
                                <p>
                                    Copyright © 2021 Muhammad Ihsanuddienullah | All rights reserved
                                </p>
                                <p>
                                    Ihsanuddienullah@xapiens.id
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}
