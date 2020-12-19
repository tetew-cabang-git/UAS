import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Row } from 'react-bootstrap'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import "./style.css";

ReactDOM.render(
  <Router>
    <Row className="header">
      <Link to="/" style={{margin: "auto"}}><h2>🦠DATA COVID-19.</h2></Link>
    </Row>
    <App />
  </Router>,
  document.getElementById('root')
)