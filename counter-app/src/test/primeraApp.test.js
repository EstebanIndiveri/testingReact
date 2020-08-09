import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
// const { render } = require('@testing-library/react');
const { default: PrimeraApp } = require('../PrimeraApp');

describe('Pruebas en primeraApp />', () => {
    // test('hola', () => {
    //     const saludo='hola';
    //     const {getByText}=render(<PrimeraApp saludo={saludo}/>)
        
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })
    test('<PrimeraApp/>', () => {
        const saludo='hola';
        const wrapper=shallow(<PrimeraApp saludo={saludo}/>)

        expect(wrapper).toMatchSnapshot();
    })
    test('debe de mostrar subtitle',()=>{
        const saludo='hola';
        const subtitle='subtitle';
        const wrapper=shallow(
            <PrimeraApp 
            saludo={saludo}
            subtitle={subtitle}/>
        );
        const textParrafo=wrapper.find('p').text();

            expect(textParrafo).toBe(subtitle);
    })
})
