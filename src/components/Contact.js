import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
//importar swepalert
import Swal from 'sweetalert2';
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");
    let response = await fetch("https://script.google.com/macros/s/AKfycbzBSpdhxZVbXPtpQaW5RhKAtd1IgQ4hznMR2PtnYiZphvNhF96i4aA81QeaftMjOCOg7g/exec", {
      method: "POST",
      body: new FormData(document.getElementById("contact-form")),
    });
    setButtonText("Enviar");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result) {
      Swal.fire({
        title: 'Gracias por tu mensaje',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      //setStatus({ succes: true, message: 'Message sent successfully'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contáctame</h2>
                <form onSubmit={handleSubmit} id="contact-form">
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="firstName" value={formDetails.firstName} placeholder="Nombre" onChange={(e) => onFormUpdate('firstName', e.target.value)} required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="lastName" value={formDetails.lasttName} placeholder="Apellidos" onChange={(e) => onFormUpdate('lastName', e.target.value)} required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email" value={formDetails.email} placeholder="Correo" onChange={(e) => onFormUpdate('email', e.target.value)} required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" maxLength={9} name="phone" value={formDetails.phone} placeholder="Celular" onChange={(e) => onFormUpdate('phone', e.target.value)} required/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" value={formDetails.message} placeholder="Mensaje" onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>

                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}