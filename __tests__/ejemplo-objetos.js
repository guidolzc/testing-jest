const cliente = { 
    nombre :'juan pablo',
    balance:500

};

describe ('Testing al Cliente ', ()=>{
    test ('El cliente es premium ', ()=> {
        expect (cliente.balance).toBeGreaterThan(400);

    });
    test ('es juan pablo',()=>{
        expect(cliente.nombre).toBe('juan pablo');

    });


    test ('no es otro cliente ', () => {
        expect(cliente.nombre).not.toBe('Pedro');
    });

    test('no tiene 500', () => {
        expect(cliente.balance).not.toBe(400);
    })

})
