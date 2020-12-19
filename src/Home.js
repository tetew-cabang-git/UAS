import React, { useState }from "react";
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Route, Switch, Link } from 'react-router-dom';
import Axios from "axios";
import "./style.css";
import AnimatedNumber from 'animated-number-react';
import Global from './Global'
import Indonesia from './Indonesia'
import Alert from 'react-bootstrap/Alert'
import Aboutus from './Aboutus'
import Moment from 'react-moment';
import indoFlag from './img/indonesia.png'

// kalo error install react-router-dom, react-bootstrap bootstrap di direktori projeknya
// npm install react-router-dom
// npm install react-bootstrap bootstrap
// npm install animated-number-react
// npm install recharts
// npm intstall react-select

function AlertDismissible() {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert show={show} variant="info">
          <Alert.Heading>Tunggu dulu! Sudah cuci tangan belum?</Alert.Heading>
          <p>
            Jangan lupa pakai masker ya sayang-sayang akuuu!
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-info">
              Oke sip mantap
            </Button>
          </div>
        </Alert>
      </>
    );
  }

export default class Home extends React.Component {
  state = {
    confirmed:0,
    recovered:0,
    deaths:0,
    lastUpdate:""
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const resApi  = await Axios.get("https://covid19.mathdro.id/api/");
    this.setState({
      confirmed: resApi.data.confirmed.value,
      recovered: resApi.data.recovered.value,
      deaths: resApi.data.deaths.value,
      lastUpdate : resApi.data.lastUpdate
    });
  }

  thousandSeparator(value){
    return value.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  render() {
    return ( 
      <Container className="home">
        <AlertDismissible />
        <h2 className="title">🌍GLOBAL.</h2>
        <Row className="flex">
          <Col md={4} className="box confirmed">
            <h3>🤒Positive.</h3>
            <h4> <AnimatedNumber value={this.state.confirmed} formatValue={this.thousandSeparator}/> </h4>
          </Col>
          <Col md={4} className="box recovered">
            <h3>💉Recovered.</h3>
            <h4> <AnimatedNumber value={this.state.recovered} formatValue={this.thousandSeparator}/> </h4>
          </Col>
          <Col md={4} className="box deaths">
            <h3>☠️Death.</h3>
            <h4> <AnimatedNumber value={this.state.deaths} formatValue={this.thousandSeparator}/> </h4>
          </Col>
        </Row>
        <div style={{marginBottom: '15%'}}>
          <h4>Last Update: <Moment date={this.state.lastUpdate} format="DD MMM YYYY hh:mm"></Moment></h4>
        </div>
        <Row className="flex">
          <Col md={6} className="batas">
            <Link to="/Global"><Button className="tombol" style={{width:'70%', height:'150px', fontSize:'35px'}} variant="primary">🌎International.</Button></Link>
          </Col>
          <Col md={6}>
            <Link to="/Indonesia"><Button className="tombol" style={{width:'70%', height:'150px', fontSize:'35px'}} variant="danger"><img src={indoFlag}/>Indonesia.</Button></Link>
          </Col>
        </Row>
        <Row style={{marginTop:'10%'}} className="justify-content-md-center aboutus">
          <Link to="/Aboutus" style={{margin: "auto"}}><h1>About Us.</h1></Link>
        </Row>
        <Switch>
            <Route exact path='/Global'>
                <Global/>
            </Route>
            <Route exact path='/Indonesia'>
                <Indonesia/>
            </Route>
            <Route exact path='/Aboutus'>
              <Aboutus/>
            </Route>
        </Switch>
      </Container>
    );
  }
}