const { getHeroeById, getHeroesByOwner } = require("../../base-pruebas/08-imp-exp");
const { default: heroes } = require("../../data/heroes");

describe('Pruebas en funciones de Héroes',()=>{
    test('retorna heroe', () => {
        const id=1;
        const heroe=getHeroeById(id);

        const heroeData=heroes.find(heroe=>heroe.id===id);
        
        expect(heroe).toEqual(heroeData);
        
    })

    test('retorna undefines si heroe no existe', () => {
        const id=10;
        const heroe=getHeroeById(id);

        // const heroeData=heroes.find(heroe=>heroe.id===id);
        
        expect(heroe).toBe(undefined);
        
    });

    test('retorna DC', () => {
        const owner='DC';
        const heroe=getHeroesByOwner(owner);



        const arrayHeroes=heroes.filter(heroe=>heroe.owner===owner);
        
        expect(heroe).toEqual(arrayHeroes);
        
    })

    test('retorna Marvel', () => {
        const owner='Marvel';
        const heroe=getHeroesByOwner(owner);

        // const arrayHeroes=heroes.filter(heroe=>heroe.owner===owner);
        
        expect(heroe.length).toBe(2);
        
    })
    
})