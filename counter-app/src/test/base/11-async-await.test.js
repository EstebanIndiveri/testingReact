const { getImagen } = require("../../base-pruebas/11-async-await")

describe('pruebas con async-await', () => {
    test('url de la image', async() => {
        const url = await getImagen()

        expect(typeof url).toBe('string');
    })
    
})
