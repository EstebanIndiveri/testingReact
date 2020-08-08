describe('pruebas demo.test',()=>{
    test('iguales los strings',()=>{
        const mensaje='Hola Mundo';
        const mensaje2=`Hola Mundo`;
    
        //3.observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    });
})

