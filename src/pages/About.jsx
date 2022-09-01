import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                Estamos comprometidos a proporcionar soluciones de viaje seguro
                </h2>

                <p className="section__description">
                Entendemos la complejidad de los viajes de negocios y
                 la importancia de confiar en su empresa de gestión de viajes.
                  Con nuestra amplia experiencia y un conjunto de funciones diseñadas
                   para simplificar y economizar sus reservas, 
                puede estar seguro de que sus viajeros están en las mejores manos.
                </p>

                <p className="section__description">
                A través de nuestros Centros Globales de Excelencia, 
                NUESTROS SERVICIOS mantiene una amplia presencia en el mundo;
                proporciona soluciones de viaje globales, bajo una plataforma
                única, complementada por la presencia de la asesoría local y la
                 experiencia regional a través de nuestra infraestructura optimizada. 
                 Hoy en día, los Centros Globales de Excelencia de estáMOS presentes 
                 en 6 continentes con la posibilidad de realizar
                 reservas tanto a nivel local como global en más de 50 mercados específicos.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Necesitas Ayuda</h6>
                    <h4>+00123456789</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Expertos</h6>
              <h2 className="section__title">Nuestra Familia</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
