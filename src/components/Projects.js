import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../assets/img/pdeliveryreservas.png";
import projImg2 from "../assets/img/pcodiguito.png";
import projImg3 from "../assets/img/pencriptador.png";
import projImg4 from "../assets/img/pboomerangw.png";
import projImg5 from "../assets/img/pchat.png";
import projImg6 from "../assets/img/pcarrito.png";
import projImg7 from "../assets/img/preservasjsp.png";
import projImg8 from "../assets/img/pboomerangd.png";
import projImg9 from "../assets/img/ptienditav2.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Sistema de delivery",
      description: "Sistema web de delivery con ubicación en tiempo real",
      imgUrl: projImg1,
    },
    {
      title: "Landing Page",
      description: "Diseño y desarrollo de landing page para empresa de servicios",
      imgUrl: projImg2,
    },
    {
      title: "App de tiendita",
      description: "Sistema web de tiendita con autenticación de usuarios",
      imgUrl: projImg9,
    },
    {
      title: "Sistema web de restaurantes",
      description: "Sistema web para la gestión de restaurantes",
      imgUrl: projImg4,
    },
    {
      title: "Social Chat",
      description: "Chat en tiempo real con autenticación de usuarios",
      imgUrl: projImg5,
    },
    {
      title: "Carrito de compras",
      description: "Carrito de compras con autenticación de usuarios",
      imgUrl: projImg6,
    },
  ];

  const projects2 = [
    {
      title: "Sistema para restaurante",
      description: "Sistema de escritorio para la gestión de restaurantes creado en vb.net",
      imgUrl: projImg8,
    },
  ];

  const projects3 = [
    {
      title: "Sistema de Reservas JSP",
      description: "Sistema web de reservas para restaurantes creado con jsp",
      imgUrl: projImg7,
    },
    {
      title: "Encriptador de texto",
      description: "Encriptador de texto con algoritmo de cifrado en base64",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Proyectos</h2>
                  <p>¡Explora mi sección de Proyectos y descubre una ventana a mi creatividad y habilidades en el desarrollo web. Explora cómo he convertido ideas y experiencias en aplicaciones excepcionales!</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">PHP</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">DESKTOP</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">OTROS</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {
                            projects2.map((project2, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project2}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {
                            projects3.map((project3, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project3}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
