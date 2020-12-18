import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import "../style.css";
import AnimatedNumber from "animated-number-react";
import Select from 'react-select'

export default function Provinsi(){
    const [prov, setProv] = useState([]);
    const [pilih, setPilih] = useState('');
    const [positif, setPositif] = useState(0);
    const [sembuh, setSembuh] = useState(0);
    const [meninggal, setMeninggal] = useState(0);
    const [rawat, setRawat] = useState(0);
    const [provinsi, setProvinsi] = useState('');

    useEffect(() => {
        Axios.get("http://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi").then((res) => {
            setProv(res.data)
        });
        if(pilih !== ''){
            setPositif(prov[pilih].kasus)
            setSembuh(prov[pilih].sembuh)
            setMeninggal(prov[pilih].meninggal)
            setRawat(prov[pilih].dirawat)
            setProvinsi(prov[pilih].provinsi)
        }
    },[prov, positif, sembuh, meninggal, rawat, provinsi, pilih])

    let renderProv = prov.map((provi, i) => (
        {key:i, value: i, label: provi.provinsi}
    ))

    const getProv = (e) =>{
        setPilih(e.value)
    }

    const thousandSeparator = (value) => {
        return value.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    if(prov){
        return(
            <Container>
                <h1>Data Per Provinsi</h1>
                <Select options={renderProv} placeholder="Select One" onChange={getProv}/>
                {pilih !== '' && (<h4> Provinsi yang dipilih: {provinsi}</h4>)}
                {pilih !== '' && (<Row className="flex">
                    <Col md={4} className="box confirmed">
                        <h3>Positif</h3>
                        <h4> <AnimatedNumber value={positif} formatValue={thousandSeparator}/> </h4>
                    </Col>
                    <Col md={4} className="box recovered">
                        <h3>Sembuh</h3>
                        <h4> <AnimatedNumber value={sembuh} formatValue={thousandSeparator}/> </h4>
                    </Col>
                    <Col md={4} className="box deaths">
                        <h3>Meninggal</h3>
                        <h4> <AnimatedNumber value={meninggal} formatValue={thousandSeparator}/> </h4>
                    </Col>
                    <Col md={4} className="box rawat">
                        <h3>Dirawat</h3>
                        <h4> <AnimatedNumber value={rawat} formatValue={thousandSeparator}/> </h4>
                    </Col>
                </Row>)}
            </Container>
        )
    }
}