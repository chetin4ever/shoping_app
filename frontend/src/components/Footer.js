import React from "react"
import { Container, Row, Col } from "react-bootstrap"

export const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright Proshop &copy; 2021</Col>
        </Row>
      </Container>
    </footer>
  )
}
