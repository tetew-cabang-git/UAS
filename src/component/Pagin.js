import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { Container } from 'react-bootstrap'
import paginationFactory from 'react-bootstrap-table2-paginator'
import BootstrapTable from 'react-bootstrap-table-next';


export default function Pagin(){ 
    const [prov, setProv] = useState([])

    useEffect(() => {
        Axios.get('http://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/more').then((res) => {
            setProv(res.data)
        })
    },[prov])

    let renderDaily = prov.map((provi, i) => (
        {
            id: i+1,
            name: provi.provinsi, 
            positive: provi.penambahan.positif, 
            recovered: provi.penambahan.sembuh, 
            death:provi.penambahan.meninggal
        }
    ))
    const columns = [

        {
            dataField: 'id',
            text: 'ID'
        },
        {
            dataField: 'name',
            text: 'Province'
        },
        {
            dataField: 'positive',
            text: 'Positive'
        },
        {
            dataField: 'recovered',
            text: 'Recovered'
        },
        {
            dataField: 'death',
            text: 'Death'
        }
    ]

    return(
        <Container>
            <h3>Data per hari per provinsi</h3>
            <BootstrapTable bootstrap4 keyField='id' data={renderDaily} columns={columns} pagination={paginationFactory()} />
        </Container>
    )
}