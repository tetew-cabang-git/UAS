import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'

ReactDOM.render(
    <Router>
      <Row className="header">
        <Link to="/" style={{textAlign:'center', margin:'auto'}}><h2>DATA COVID-19.</h2></Link>
      </Row>
      <App />
    </Router>,
    document.getElementById('root')
);
  