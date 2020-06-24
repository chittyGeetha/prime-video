import React, { Component, Fragment } from 'react'
const PageNotFoundComponent=()=>{
    return(
        <div>
            <Fragment>
                <div className="d-flex align-items-center justify-content-center">
                <p styel={{color:'red', fontSize:"100px"}}>Opps Page not Found</p>
                <h1 style={{color:'red',fontSize:"100px"}}>404</h1></div>
                </Fragment>
        </div>
    );
};
export default PageNotFoundComponent;