import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home'
import Axios from "axios";
import { Container, Form } from 'react-bootstrap'

export default class Global extends React.Component{
    state = {
        countries: [],
        value: ''
    }

    componentDidMount(){
        this.getData();
    }

    async getData(){
        const resCountries  = await Axios.get("https://covid19.mathdro.id/api/countries");
        const count = resCountries.data.countries;
        this.setState({
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


    render(){
        console.log(this.state.countries)
        return(
            <Container>    
                <Form.Control as="select" >
                    {this.renderCountryOptions()}
                </Form.Control>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Container>
        )
    }
}