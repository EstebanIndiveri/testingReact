import '@testing-library/jest-dom'
const { getSaludo } = require("../../base-pruebas/02-template-string");

describe('pruebas en 02-template',()=>{
    test('getSaludo hola fernando',()=>{
        const nombre='Fernando';
        getSaludo(nombre);
        const saludo=getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);
    })

    //getsaludo carlos sino hay argumentos
    test('carlos',()=>{
        const saludo=getSaludo();
        expect(saludo).toBe('Hola Carlos');
    })
});
