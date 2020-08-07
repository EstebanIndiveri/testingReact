import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types'
const CounterApp = ({value}) => {

    const [count,setCounter]=useState(value);

    const handleAdd=()=>{
        setCounter(count +1 );
    } 
    const reset=()=>{
        setCounter(value);
    }
    const menos=()=>{
        setCounter(count -1 );

    }

    return ( 
        <Fragment>
            <h1>CounterApp</h1>
            <h1 style={{color:'violet'}}>{count}</h1>
            <button onClick={()=>handleAdd()} >+</button>
            <button onClick={()=>reset()} >Reset</button>
            <button onClick={()=>menos()} >-1</button>

        </Fragment>
     );
}

CounterApp.propTypes={
    value:PropTypes.number.isRequired
}
 
export default CounterApp;