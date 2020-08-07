import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
const PrimeraApp = ({saludo,subtitle}) => {
    // const saludo='Hola mundo';
    return ( 
        <Fragment>
        <h1>{saludo}</h1>
        
        <p style={{color:"red",textDecoration:'underline'}}>{subtitle}</p>
        </Fragment>
    );
}

PrimeraApp.propTypes={
    saludo:PropTypes.string.isRequired
}

PrimeraApp.defaultProps={
    subtitle:'subtitle'
}

export default PrimeraApp;
