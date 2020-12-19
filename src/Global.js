import React, { useState, useEffect } from 'react';
import { Button, Row, Col } from 'react-bootstrap'
import Axios from "axios";
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {
    ResponsiveContainer,
    AreaChart, 
    Area, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip,
    Legend,
} from 'recharts';
import AnimatedNumber from 'animated-number-react'
import Select from 'react-select'
import Moment from'react-moment'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas);

function convertDate(tanggal){
    const date = new Date(tanggal);
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(date)
}

export default function Global() {
    const [confirmed, setConfirmed] = useState(0);
    const [recover, setRecover] = useState(0);
    const [death, setDeath] = useState(0);
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('')
    const [daily, setDaily] = useState([])
    const [lastUpdate, setlastUpdate] = useState("");

    useEffect(() => {
        Axios.get('https://covid19.mathdro.id/api/countries').then((res) => {
            setCountries(res.data.countries)
        })
        Axios.get('https://covid19.mathdro.id/api/daily').then((res) => {
            setDaily(res.data)
        })
        Axios.get('https://covid19.mathdro.id/api/').then((res) =>{
            setlastUpdate(res.data.lastUpdate)
        })
    },[countries, daily])


    let renderCountry = countries.map((country, i) => (
        {key: i, value:country.iso3, label:country.name}
    ))

    const getCountry = (e) => {
        setCountry(e.value)
    }

    useEffect(() => {
        if(country !== ''){
            Axios.get(`https://covid19.mathdro.id/api/countries/${country}`).then((res) => {
                setConfirmed(res.data.confirmed.value)
                setRecover(res.data.recovered.value)
                setDeath(res.data.deaths.value)
            })
        }
    },[country, confirmed, recover, death])

    const thousandSeparator = (value) => {
        return value.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    if(daily){
        daily.forEach((key) => {
            const tanggalBaru = convertDate(key.reportDate)
            key.reportDate = tanggalBaru
        });
        return ( 
            <Container>
                <h1>Covid-19 Update</h1>
                <div>
                    <h4>Last Update: <Moment date={lastUpdate} format="DD MMM YYYY hh:mm"></Moment></h4>
                </div>
                <ResponsiveContainer width="100%" aspect={2}>
                    <AreaChart
                        width={700}
                        height={400}
                        data={daily}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0}}
                    >
                        <defs>
                            <linearGradient id="colorPos" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#d4b60a" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#d4b60a" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="reportDate" hide="true" />
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Area type="monotone" dataKey="deltaConfirmed" stroke="#d4b60a" stackId="1" name="Positive" fillOpacity={1} fill="url(#colorPos)" />
                    </AreaChart>
                </ResponsiveContainer>
                <h1 style={{marginTop: "5%"}}>Data per Countries</h1>
                <Select options={renderCountry} onChange={getCountry}/>
                {country !== '' &&(<Row className="flex">
                    <Col md={4} className="box confirmed">
                        <h3>🤒Positive.</h3>
                        <h4> <AnimatedNumber value={confirmed} formatValue={thousandSeparator}/> </h4>
                    </Col>
                    <Col md={4} className="box recovered">
                        <h3>💉Recovered.</h3>
                        <h4> <AnimatedNumber value={recover} formatValue={thousandSeparator}/> </h4>
                    </Col>
                    <Col md={4} className="box deaths">
                        <h3>☠️Death.</h3>
                        <h4> <AnimatedNumber value={death} formatValue={thousandSeparator} /> </h4>
                    </Col>
                    </Row>)}
                    <Row style={{marginTop:'10%'}}>
                    <Col>
                        <Link to="/"><Button><FontAwesomeIcon icon={["fas", "angle-left"]}/> Back To Home</Button></Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}