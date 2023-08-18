import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={12} xl={12}>
            <center>
              <h4>"Si estás en busca de un desarrollador apasionado que combina la creatividad con la eficiencia, estás en el lugar correcto. Permíteme llevar tus ideas al mundo digital con soluciones web innovadoras y funcionales. Juntos, podemos convertir tus conceptos en realidad y hacer que tu visión cobre vida en línea."</h4>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </center>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
