import React from "react";
import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Axios from "axios";
import "./style.css";
import AnimatedNumber from 'animated-number-react';
import Global from './Global'
import Indonesia from './Indonesia'

// kalo error install react-router-dom, react-bootstrap bootstrap di direktori projeknya
// npm install react-router-dom
// npm install react-bootstrap bootstrap
// npm install animated-number-react
// npm install recharts
// npm intstall react-select

export default class Home extends React.Component {
  state = {
    confirmed:0,
    recovered:0,
     deaths:0
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const resApi  = await Axios.get("https://covid19.mathdro.id/api/");
    this.setState({
      confirmed: resApi.data.confirmed.value,
      recovered: resApi.data.recovered.value,
      deaths: resApi.data.deaths.value
    });
  }

  thousandSeparator(value){
    return value.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  render() {
    return ( 
      <Container className="home">
        <Row className="header">
          <h2>DATA COVID-19.</h2>
        </Row>
        <h2 className="title">GLOBAL.</h2>
        <Row className="flex">
          <Col md={4} className="box confirmed">
            <h3>Kasus dikonfirmasi</h3>
            <h4> <AnimatedNumber value={this.state.confirmed} formatValue={this.thousandSeparator}/> </h4>
          </Col>
          <Col md={4} className="box recovered">
            <h3>Kasus Recovered</h3>
            <h4> <AnimatedNumber value={this.state.recovered} formatValue={this.thousandSeparator}/> </h4>
          </Col>
          <Col md={4} className="box deaths">
            <h3>Kasus Meninggal</h3>
            <h4> <AnimatedNumber value={this.state.deaths} formatValue={this.thousandSeparator}/> </h4>
          </Col>
        </Row>
        <Row>
          <Col style={{borderRight:'1px solid black'}}>
            <Link to="/Global"><Button style={{width:'70%', height:'150px', fontSize:'35px'}} variant="primary">Data Negara Lain.</Button></Link>
          </Col>
          <Col className="col-md-6">
            <Link to="/Indonesia"><Button style={{width:'70%', height:'150px', fontSize:'35px'}} variant="danger">Indonesia.</Button></Link>
          </Col>
        </Row>
        <Row style={{marginTop:'10%'}}>
          <Col>
          <h1>About Us</h1>
          </Col>
        </Row>
        <Switch>
            <Route exact path='/Global'>
                <Global/>
            </Route>
            <Route exact path='/Indonesia'>
                <Indonesia/>
            </Route>
        </Switch>
      </Container>
    );
  }
}