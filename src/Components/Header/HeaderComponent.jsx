import React, { Component, Fragment } from 'react';

import './Header.style.css';
import { Link} from 'react-router-dom'

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <nav>
                <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <a className="navbar-brand" href="#">
            <img src="logo.svg" alt="logo"></img>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
             
            <li className="nav-item">
              <Link className="nav-link" to="#">Logout</Link>
            </li>
            </ul></div></nav>         
        
                </nav>
            </Fragment>
         );
    }
}
 
export default HeaderComponent;