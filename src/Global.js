import React from 'react';
import { Button, Row, Col } from 'react-bootstrap'
import Axios from "axios";
import { Container, Form } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { 
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  CartesianGrid
} from 'recharts';


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


    render(){
        console.log(this.state.countries)
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
        <Row style={{marginTop:'10%'}}>
        <Col>
                <Link to="/"><Button>Back To Home</Button></Link>
        </Col>
        </Row>


    </Container>
    
    );
    }
}