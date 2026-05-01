import { useState } from 'react'
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap'
import { motion } from 'framer-motion'
import contactImg from '../../assets/img/contact-us.svg'

export default function Contact() {
  const [submit, setSubmit] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmit(!submit)
  }

  return (
    <div id="contact-us">
      <Container className="mb-5 mt-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h1>Contact Us</h1>
          <Row>
            <Col>
              <Row className="g-3">
                <Col>
                  <Card text="white" style={{ width: '18rem' }}>
                    <Card.Body>
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formControlTextarea">
                          <Form.Control as="textarea" rows={3} placeholder="Enter Message" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                        {submit && <Alert variant="success" className="mt-2">Message Sent</Alert>}
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col>
              <img src={contactImg} alt="contact" className="img-fluid" />
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  )
}
