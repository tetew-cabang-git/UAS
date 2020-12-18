import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Apip from './apip1.jpeg'
import Pesal from './pesal.jpeg'
import Ibnu from './ibnu.jpeg'
import Aldi from './aldi1.jpeg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab)

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <h1>Kelompok Seblak.</h1>
                <p style={{color:'gray'}}>Menuju tak terbatas dan melampauinya.</p>
                <Container>
                    <Row>
                        <Col md ={3}>
                            <Card style={{width: '100%'}}>
                                <Card.Img variant="top" src={Pesal} />
                                <Card.Body>
                                    <Card.Title><center>Faisal Aprianto</center></Card.Title>
                                    <Card.Text style={{fontSize:'75%'}}>00000042520</Card.Text>
                                    <Card.Text>
                                        <Row>
                                            <Col md={6}><Button variant="Info"><FontAwesomeIcon icon={["fab","github"]}/></Button></Col>
                                            <Col md={6}><Button variant="Info"><FontAwesomeIcon icon={["fab","instagram"]}/></Button></Col>
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md ={3}>
                            <Card style={{width: '100%'}}>
                                <Card.Img variant="top" src={Ibnu} />
                                <Card.Body>
                                    <Card.Title><center>Aditiya Muhammad Ibnu</center></Card.Title>
                                    <Card.Text style={{fontSize:'75%'}}>00000041342</Card.Text>
                                    <Card.Text>
                                        <Row>
                                            <Col md={6}><Button variant="Info"><FontAwesomeIcon icon={["fab","github"]}/></Button></Col>
                                            <Col md={6}><Button variant="Info"><FontAwesomeIcon icon={["fab","instagram"]}/></Button></Col>
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md ={3}>
                        <Card style={{width: '100%'}}>
                                <Card.Img variant="top" src={Aldi} />
                                <Card.Body>
                                    <Card.Title><center>M Aldi Darmawan</center></Card.Title>
                                    <Card.Text style={{fontSize:'75%'}}>00000042493</Card.Text>
                                    <Card.Text>
                                        <Row>
                                            <Col md={6}><Button variant="Info"><FontAwesomeIcon icon={["fab","github"]}/></Button></Col>
                                            <Col md={6}><Button variant="Info"><FontAwesomeIcon icon={["fab","instagram"]}/></Button></Col>
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md ={3}>
                        <Card style={{width: '100%'}}>
                                <Card.Img variant="top" src={Apip} />
                                <Card.Body>
                                    <Card.Title><center>Rafif Wahyu Hidayat</center></Card.Title>
                                    <Card.Text style={{fontSize:'75%'}}>00000041910</Card.Text>
                                    <Card.Text>
                                        <Row>
                                            <Col md={6}><Button variant="Info"><FontAwesomeIcon icon={["fab","github"]}/></Button></Col>
                                            <Col md={6}><Button variant="Info"><FontAwesomeIcon icon={["fab","instagram"]}/></Button></Col>
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}