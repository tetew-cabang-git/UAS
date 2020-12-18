import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Axios from "axios";
import { Container, Table, Col, Row, Form, Button, Navbar, NavbarBrand } from 'react-bootstrap';
import AnimatedNumber from "animated-number-react";
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
import "./style.css";
import Provinsi from './component/Provinsi'
import Moment from 'react-moment';

function convertDate(tanggal) {
  const date = new Date(tanggal);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export default function Indonesia(){
  const [dataNasional, setDataNasional] = useState([])
  const [meninggal, setMeninggal] = useState(0);
  const [positif, setPositif] = useState(0)
  const [sembuh, setSembuh] = useState(0);
  const [rawat, setRawat] = useState(0)
  const [upPositif, setUpPositif] = useState(0);
  const [upSembuh, setUpSembuh] = useState(0);
  const [upMeniggal, setUpMeninggal] = useState(0);
  const [upRawat, setUpRawat] = useState(0);
  const [lastUpdate, setLastUpdate] = useState("");

  useEffect(() => {
      Axios.get("https://apicovid19indonesia-v2.vercel.app/api/indonesia/more").then((res) => {
        setPositif(res.data.total.positif);
        setMeninggal(res.data.total.meninggal);
        setSembuh(res.data.total.sembuh);
        setRawat(res.data.total.dirawat);
        setUpPositif(res.data.penambahan.positif);
        setUpSembuh(res.data.penambahan.sembuh);
        setUpMeninggal(res.data.penambahan.meninggal);
        setUpRawat(res.data.penambahan.dirawat);
        setLastUpdate(res.data.total.lastUpdate);
      });
      Axios.get("https://apicovid19indonesia-v2.vercel.app/api/indonesia/harian").then((res) => {
        setDataNasional(res.data)
      });
  },[dataNasional,positif, meninggal, sembuh, upPositif, upMeniggal, upSembuh, rawat, upRawat, lastUpdate]);

  const thousandSeparator = (value) => {
    return value.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }  

  if(dataNasional){
    dataNasional.map((key) => {
      const tanggalBaru = convertDate(key.tanggal)
      key.tanggal = tanggalBaru
    });
    return(
      <Container>
        <Row className="flex">
          <Col md={4} className="box confirmed">
            <h3>Positif</h3>
            <h4> <AnimatedNumber value={positif} formatValue={thousandSeparator}/> </h4>
            <h5> <AnimatedNumber value={upPositif} formatValue={thousandSeparator}/> </h5>
          </Col>
          <Col md={4} className="box recovered">
            <h3>Sembuh</h3>
            <h4> <AnimatedNumber value={sembuh} formatValue={thousandSeparator}/> </h4>
            <h5> <AnimatedNumber value={upSembuh} formatValue={thousandSeparator}/> </h5>
          </Col>
          <Col md={4} className="box deaths">
            <h3>Meninggal</h3>
            <h4> <AnimatedNumber value={meninggal} formatValue={thousandSeparator}/> </h4>
            <h5> <AnimatedNumber value={upMeniggal} formatValue={thousandSeparator}/> </h5>
          </Col>
          <Col md={4} className="box rawat">
            <h3>Dirawat</h3>
            <h4> <AnimatedNumber value={rawat} formatValue={thousandSeparator}/> </h4>
            <h5> <AnimatedNumber value={upRawat} formatValue={thousandSeparator}/> </h5>
          </Col>
        </Row>
        <div>
          <h4>Last Update: <Moment date={lastUpdate} format="DD MMM YYYY hh:mm"></Moment></h4>
        </div>
        <ResponsiveContainer width="100%" aspect={2}>
          <LineChart width={700} height={400} data={dataNasional}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tanggal" hide="true" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="positif" stroke="#d4b60a" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="sembuh" stroke="#00c451" activeDot={{ r: 7}} />
            <Line type="monotone" dataKey="meninggal" stroke="#e08787" activeDot={{ r: 6}} />
          </LineChart>
        </ResponsiveContainer>
        <Provinsi/>
        <Link to="/"><Button>Back To Home</Button></Link>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Container>
    );
  }
} 