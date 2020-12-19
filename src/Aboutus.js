import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Apip from "./img/apip.jpeg";
import Pesal from "./img/pesal.jpeg";
import Ibnu from "./img/ibnu.jpeg";
import Aldi from "./img/aldi.jpeg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab);

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <h1>Kelompok Seblak.</h1>
        <p style={{ color: "gray" }}>Menuju tak terbatas dan melampauinya.</p>
        <Container>
          <Row>
            <Col md={3}>
              <Card style={{ width: "100%", height: "100%" }}>
                <Card.Img variant="top" src={Pesal} />
                <Card.Body>
                  <Card.Title>
                    <center>Faisal Aprianto</center>
                  </Card.Title>
                  <Card.Text style={{ fontSize: "75%", marginTop: "20%" }}>00000042520</Card.Text>
                  <Card.Footer>
                    <Row>
                      <Col md={6} xs={6}>
                        <Button
                          variant="Info"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open("https://github.com/faisalapt");
                          }}
                        >
                          <FontAwesomeIcon icon={["fab", "github"]} />
                        </Button>
                      </Col>
                      <Col md={6} xs={6}>
                        <Button
                          variant="Info"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open("https://instagram.com/faisalapt");
                          }}
                        >
                          <FontAwesomeIcon icon={["fab", "instagram"]} />
                        </Button>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={Ibnu} />
                <Card.Body>
                  <Card.Title>
                    <center>Aditiya Muhamad Ibnu</center>
                  </Card.Title>
                  <Card.Text style={{ fontSize: "75%" }}>00000041342</Card.Text>
                  <Card.Footer>
                    <Row>
                      <Col md={6} xs={6}>
                        <Button
                          variant="Info"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open("https://github.com/xrnvx");
                          }}
                        >
                          <FontAwesomeIcon icon={["fab", "github"]} />
                        </Button>
                      </Col>
                      <Col md={6} xs={6}>
                        <Button
                          variant="Info"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open("https://instagram.com/xrnvx_");
                          }}
                        >
                          <FontAwesomeIcon icon={["fab", "instagram"]} />
                        </Button>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={Aldi} />
                <Card.Body>
                  <Card.Title>
                    <center>Muhammad Aldi Darmawan</center>
                  </Card.Title>
                  <Card.Text style={{ fontSize: "75%" }}>00000042493</Card.Text>
                  <Card.Footer>
                    <Row>
                      <Col md={6} xs={6}>
                        <Button
                          variant="Info"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open("https://github.com/madj14");
                          }}
                        >
                          <FontAwesomeIcon icon={["fab", "github"]} />
                        </Button>
                      </Col>
                      <Col md={6} xs={6}>
                        <Button
                          variant="Info"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open("https://instagram.com/maldiid");
                          }}
                        >
                          <FontAwesomeIcon icon={["fab", "instagram"]} />
                        </Button>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card style={{ width: "100%",height: "100%" }}>
                <Card.Img variant="top" src={Apip} />
                <Card.Body>
                  <Card.Title>
                    <center>Rafif Wahyu Hidayat</center>
                  </Card.Title>
                  <Card.Text style={{ fontSize: "75%", marginTop: "20%" }}>00000041910</Card.Text>
                  <Card.Footer>
                    <Row>
                      <Col md={6} xs={6}>
                        <Button
                          variant="Info"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open("https://github.com/rafifwhy");
                          }}
                        >
                          <FontAwesomeIcon icon={["fab", "github"]} />
                        </Button>
                      </Col>
                      <Col md={6} xs={6}>
                        <Button
                          variant="Info"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open("https://instagram.com/rafifwahyuh");
                          }}
                        >
                          <FontAwesomeIcon icon={["fab", "instagram"]} />
                        </Button>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Row style={{marginTop: "2.5%"}}>
          <Col md={12}>
            <h1>Credits</h1>
            <h3>Special thanks to</h3>
            <h4><a href="https://covid19.mathdro.id/api" target="_blank" rel="noreferrer">Mathdroid</a></h4>
            <h4><a href="https://apicovid19indonesia-v2.vercel.app/api" target="_blank" rel="noreferrer">Reynadi</a></h4>
            <h4><a href="https://www.flaticon.com/free-icon/indonesia_303077" target="_blank" rel="noreferrer">Flaticon</a></h4>
            <h4><a href="https://fontawesome.com/icons?d=gallery" target="_blank" rel="noreferrer">Font Awesome</a></h4>
          </Col>
        </Row>
        <Link to="/"><Button style={{marginTop: "2.5%"}}><FontAwesomeIcon icon={["fas", "angle-left"]}/> Back To Home</Button></Link>
      </Container>
    );
  }
}
