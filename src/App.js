import React, { useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap'
import Axios from "axios";
import "./style.css";

// kalo error install react-router-dom, react-bootstrap bootstrap di direktori projeknya
// npm install react-router-dom
// npm install react-bootstrap bootstrap

export default class App extends React.Component {
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

  renderCountryOptions(){
    return this.state.countries.map((country,i)=>{
      return<option key={i}>{country.name}</option>
    });
  }

  render() {
    return ( 
      <div className = "container" >
        <h1>Corona Update</h1>
        <Form.Control as="select">
          {this.renderCountryOptions()}
        </Form.Control>
        <div class="flex">
          <div className="box confirmed">
            <h3>Kasus dikonfirmasi</h3>
            <h4> {this.state.confirmed} </h4>
          </div>
          <div className="box recovered">
            <h3>Kasus Recovered</h3>
            <h4> {this.state.recovered} </h4>
          </div>
          <div className="box deaths">
            <h3>Kasus Meninggal</h3>
            <h4> {this.state.deaths} </h4>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}