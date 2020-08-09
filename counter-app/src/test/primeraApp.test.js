import React from 'react';
const { render } = require('@testing-library/react');
const { default: PrimeraApp } = require('../PrimeraApp');

describe('Pruebas en primeraApp />', () => {
    test('hola', () => {
        const saludo='hola';
        const {getByText}=render(<PrimeraApp saludo={saludo}/>)
        
        expect(getByText(saludo)).toBeInTheDocument();
    })
    
})
