import React, { useState, useEffect } from "react";
import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import Axios from "axios";
import "./style.css";

// kalo error install react-router-dom, react-bootstrap bootstrap di direktori projeknya
// npm install react-router-dom
// npm install react-bootstrap bootstrap
// npm install axios

export default class App extends React.Component {
  constructor(props){
    super(props)

    this.getCountryData = this.getCountryData.bind(this);
  }
  
  
  state = {
    confirmed:0,
    recovered:0,
    deaths:0,
    countries: []
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const resApi  = await Axios.get("https://covid19.mathdro.id/api/");
    const resCountries  = await Axios.get("https://covid19.mathdro.id/api/countries");    
    const count = resCountries.data.countries;
    this.setState({
      confirmed: resApi.data.confirmed.value,
      recovered: resApi.data.recovered.value,
      deaths: resApi.data.deaths.value,
      countries: count
    });
  }

  async getCountryData(e){
    const res = await Axios.get(`https://covid19.mathdro.id/api/countries/${e.target.value}`);
    this.setState({
      confirmed: res.data.confirmed.value,
      recovered: res.data.recovered.value,
      deaths: res.data.deaths.value,
    });
  }

    renderCountryOptions(){
        return this.state.countries.map((country,i)=>{
        return<option key={i} value={country.iso3}>{country.name}</option>
        });
    }



  render() {
    return ( 
      <Container>
        <h1>Covid-19 Update</h1>
        
        <select onChange={this.getCountryData}>
          {this.renderCountryOptions()}
        </select>


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
            <Button style={{width:'70%', height:'150px', fontSize:'35px'}} variant="primary">Global</Button>
          </Col>
          <Col className="col-md-6">
            <Button style={{width:'70%', height:'150px', fontSize:'35px'}} variant="danger">Indonesia</Button>
          </Col>
        </Row>
        <Row style={{marginTop:'10%'}}>
          <Col>
          <h1>About Us</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}