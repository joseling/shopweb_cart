import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    Ventas de Autos <br /> Nic
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            La empresa en sí es una empresa muy exitosa.
              En consecuencia, distinción, pues, al rechazar del deseo de estos ex
              ¿Cómo puedo perdonar, toda la rapidez de la mente cegada por algunos?
              Elegido y en ese momento para rechazar?
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Oficina Central</h5>
              <p className="office__info">123 Managua,Managua, Nicaragua</p>
              <p className="office__info">Phone: +0995345875365</p>

              <p className="office__info">Email: muhib5532@gmail.com</p>

              <p className="office__info">Hora de Oficina: 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Redes</h5>
              <p className="section__description">Suscribete a nuestras Redes</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Desarrollado Jhdavila
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
