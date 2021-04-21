const password = "123456";

describe('valida que el password no este vacio y tenga una extension de 6 caracteres',() => {
    test ('que el password tenga 6 caracteres',()=>{
        expect(password).toHaveLength(6);  
        // toma el password y lee cuantos numeros tiene y q no sobrepase de 6 
    })

    test('password no vacio', ()=> {
        expect(password).not.toHaveLength(0); 
         // lo mismo pero q no este vacio
    })


})