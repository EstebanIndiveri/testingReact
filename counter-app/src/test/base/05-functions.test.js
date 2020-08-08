import{getUser,getUsuarioActivo}from '../../base-pruebas/05-funciones';

describe('5funciones',()=>{

    test('getUser retorna objeto',()=>{
        const userTest={
            uid:'ABC123',
            username:'El_Papi1502'
        }
        const user=getUser();
        expect(user).toEqual(userTest);
    })

    test('getUserActivo retorna objeto',()=>{
        const nombre='Juan';
        const user=getUsuarioActivo(nombre);
        expect(user).toEqual({
            uid:'ABC567',
            username:nombre
        });
    })
})