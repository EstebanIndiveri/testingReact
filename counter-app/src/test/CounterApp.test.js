
import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';

import CounterApp from '../CounterApp';

describe('pruebas <CounterApp/>', () => {

    beforeEach(()=>{
        console.log('before');
    });

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

    test('decrementar boton -1', () => {
        const wrapper=shallow(<CounterApp/>);
        wrapper.find('button').at(2).simulate('click');
        const counterText=wrapper.find('.count').text().trim();
        expect(counterText).toBe('11');
    })
    test('btn reset', () => {
        const wrapper=shallow(<CounterApp value={105}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText=wrapper.find('.count').text().trim();
        expect(counterText).toBe('105');
        
    })
    
});
