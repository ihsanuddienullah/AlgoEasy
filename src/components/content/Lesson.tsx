import { Container, Row, Col, Card } from 'react-bootstrap'
import { motion } from 'framer-motion'
import lessonImg from '../../assets/img/lesson.svg'

export default function Lesson() {
  return (
    <div id="lesson">
      <Container className="mb-5 mt-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Row>
            <Col>
              <img src={lessonImg} alt="code" className="img-fluid" />
            </Col>
            <Col>
              <Row className="g-3">
                <Col>
                  <Card text="white" style={{ width: '18rem' }}>
                    <Card.Header>HTML</Card.Header>
                    <Card.Body>
                      <Card.Title>Hypertext Markup Language</Card.Title>
                      <Card.Text>
                        Hypertext Markup Language (HTML) is the standard markup language for
                        documents designed to be displayed in a web browser.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card text="white" style={{ width: '18rem' }}>
                    <Card.Header>CSS</Card.Header>
                    <Card.Body>
                      <Card.Title>Cascading Style Sheet</Card.Title>
                      <Card.Text>
                        Cascading Style Sheets (CSS) is a style sheet language used for describing
                        the presentation of a document written in a markup language such as HTML.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  )
}
