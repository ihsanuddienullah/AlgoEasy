import { Container, Row, Col, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import introImg from '../assets/img/introduction.svg'

export default function Introduction() {
  return (
    <div id="introduction">
      <div className="py-5 bg-dark text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Container>
            <Row>
              <Col>
                <h1>Hello World!</h1>
                <p>Welcome to AlgoEasy,</p>
                <p>a simple web app where you can learn programming online.</p>
                <p>We'll show you what to learn to code.</p>
                <p>
                  <Button variant="primary" href="https://refactory.id">Get Started</Button>
                </p>
              </Col>
              <Col md="auto">
                <img src={introImg} alt="code" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </motion.div>
      </div>
    </div>
  )
}
