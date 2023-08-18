import html5 from "../assets/img/html.svg";
import css3 from "../assets/img/css3.svg";
import JavaScript from "../assets/img/javascript.svg";
import aws from "../assets/img/aws.svg";
import Carousel from 'react-multi-carousel';
import bootstrap from "../assets/img/bootstrap.svg";
import php from "../assets/img/php.svg";
import mysql from "../assets/img/mysql.svg";
import sql from "../assets/img/sql.svg";
import figma from "../assets/img/figma.svg";
import github from "../assets/img/githubskil.svg";
import jsp from "../assets/img/jsp.svg";
import vb from "../assets/img/vbnet.svg";
import 'react-multi-carousel/lib/styles.css';
//import arrow1 from "../assets/img/arrow1.svg";
//import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>¡Bienvenido a mi sección de Habilidades! Aquí te presento un vistazo a las competencias técnicas y conocimientos que he cultivado a lo largo de mi trayectoria como desarrollador web PHP</p>
                        <Carousel responsive={responsive} infinite={true} autoPlay autoPlaySpeed={1500} customTransition="all 1s linear" className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={html5} alt="Html5" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src={css3} alt="Css3" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={JavaScript} alt="Javascript" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Bootstrap" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={php} alt="PHP" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="mySQL" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="SQL" />
                                <h5>SQL Server</h5>
                            </div>
                            <div className="item">
                                <img src={figma} alt="Figma" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={github} alt="Github" />
                                <h5>GitHub</h5>
                            </div>
                            <div className="item">
                                <img src={aws} alt="AWS" />
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                                <img src={jsp} alt="JSP" />
                                <h5>JSP</h5>
                            </div>
                            <div className="item">
                                <img src={vb} alt="VB.NET" />
                                <h5>VB.NET</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Imagen" />
    </section>
  )
}
