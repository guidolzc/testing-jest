function suma(a,b){
    return a+b;

}

function restar (a,b){
    return a-b;

}

describe ('testinf a las funsiones de suma y resta', () => {
        test ('suma de 20 y 30', ()=>{
            expect( suma(20,30) ).toBe(50); 
             // tomamos la funsion de la suma y nos debe retornar 50 
        });
        test ('Resta de 18 - 5', ()=>{
            expect( restar(10,5) ).toBe(5);
        }); 
        test ('Que la suma no sea igual a 10', ()=>{
            expect( suma(10,10) ).not.toBe(10);  
             // si la suma  no debe dar 10 
        }); 
        test ('Que la resta de 10-5 no sea otro valor', ()=>{
            expect( restar(10,5) ).not.toBe(2);
        }); 
        
});