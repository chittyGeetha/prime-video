import React, { Component, Fragment } from 'react';
import './HomeComponent.style.css';
import {Link} from 'react-router-dom'
class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let homePageStyles = {
            "background-color": "#000",
            "background-image":
                "linear-gradient(to right, #000 40%, transparent 58%),url('https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3._SY1200_FMJPG_.jpg')",
            "background-position": "right top",
            height: "100vh",
        };

        return (  <Fragment>
            <section className="mainBlock" style={homePageStyles}>
                <div className="container-fluid">
                    <div className="left">
                        <h1 className="h1 text-white mb-2">Welcome to prime video</h1>
                        <p className="text-white mt-3">
                            Join Prime to watch the latest movies, TV shows and
                            award-<br></br>winning Amazon Originals
                         </p>
                        <div className="regLink">
                            <Link to="/register" className="text-white font-weight-bold h6">Start your 30-day free trial</Link>
                        </div>
                    </div>
                    <div className="right">
                        <img src="bg.jpg" alt="" />
                    </div>
                </div>
            </section>
        </Fragment> );
    }
}
 
export default HomeComponent;