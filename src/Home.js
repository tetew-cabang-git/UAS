import React from "react";
import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Axios from "axios";
import "./style.css";
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
    // const resCountries  = await Axios.get("https://covid19.mathdro.id/api/countries");    
    // const count = resCountries.data.countries;
    this.setState({
      confirmed: resApi.data.confirmed.value,
      recovered: resApi.data.recovered.value,
      deaths: resApi.data.deaths.value
      // countries: count
    });
  }

  // renderCountryOptions(){
  //   return this.state.countries.map((country,i)=>{
  //     return<option key={i}>{country.name}</option>
  //   });
  // }

  render() {
    return ( 
      <Container>
        {/* <Form.Control as="select">
          {this.renderCountryOptions()}
        </Form.Control> */}
        <h1>Covid-19 Update</h1>
        <Row className="flex">
          <Col md={4} className="box confirmed">
            <h3>Kasus dikonfirmasi</h3>
            <h4> {this.state.confirmed} </h4>
          </Col>
          <Col md={4} className="box recovered">
            <h3>Kasus Recovered</h3>
            <h4> {this.state.recovered} </h4>
          </Col>
          <Col md={4} className="box deaths">
            <h3>Kasus Meninggal</h3>
            <h4> {this.state.deaths} </h4>
          </Col>
        </Row>
        <Row>
          <Col style={{borderRight:'1px solid black'}}>
            <Link to="/Global"><Button style={{width:'70%', height:'150px', fontSize:'35px'}} variant="primary">Global</Button></Link>
          </Col>
          <Col className="col-md-6">
            <Link to="/Indonesia"><Button style={{width:'70%', height:'150px', fontSize:'35px'}} variant="danger">Indonesia</Button></Link>
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