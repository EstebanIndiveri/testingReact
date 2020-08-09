
import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';

import CounterApp from '../CounterApp';

describe('pruebas <CounterApp/>', () => {
    test('<CounterApp correcto/>', () => {
        const wrapper=shallow(<CounterApp/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('100', () => {
        const wrapper=shallow(<CounterApp value={100}/>);
        const counterText=wrapper.find('.count').text().trim();
        expect(counterText).toBe('100');
    });
    
    test('incrementar boton +1', () => {
        const wrapper=shallow(<CounterApp/>);
        wrapper.find('button').at(0).simulate('click');
        const counterText=wrapper.find('.count').text().trim();
        expect(counterText).toBe('13');
    })
    
});
