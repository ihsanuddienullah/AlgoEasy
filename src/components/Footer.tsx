import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
  return (
    <div id="footer">
      <div className="py-5 bg-dark text-white">
        <Container>
          <Row>
            <Col>
              <h3>AlgoEasy.IO</h3>
              <p>by Xapiens Refactory Indonesia</p>
            </Col>
            <Col md="auto">
              <p>Copyright © 2021 Muhammad Ihsanuddienullah | All rights reserved</p>
              <p>Ihsanuddienullah@algoeasy.io</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
