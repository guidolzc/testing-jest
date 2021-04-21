const cliente = {
    nombre: 'juan pablo',
    balanca: 500,
    tipo :'Premium'
};

describe('testing al cliente', ()=> {
    test ('es juan pablo', ()=> {
        expect(cliente).toMatchSnapshot(); 
        // esto crea una carpeta como json para actualizar necesitarmos escribiremos npm t-- -u  'para agregar otro cliente o cambiar tendriamos q eliminar la carmeta tambien

        
    });
})

