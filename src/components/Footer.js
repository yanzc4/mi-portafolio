import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo2.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/github.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yan-zapata-cardoza-0a630116a" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Linkedin" /></a>
              <a href="https://www.facebook.com/pablo.zapata.779642" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Facebook" /></a>
              <a href="https://github.com/yanzc4" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Github" /></a>
            </div>
            <p>&copy; 2023 Yan Zapata Cardoza | Desarrollador</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
