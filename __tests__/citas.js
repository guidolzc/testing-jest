import Citas from '../js/classes/Citas';

describe('probar la clase de citas ', () =>{

    const citas = new Citas();
    const id = Date.now();
    test('agregar una nueva cita ',()=>{

   
      const citaObj = {
            id,
            mascota: 'hook',
            propietario: 'rafa',
            telefono: '19191919',
            fecha: '10-12-2021',
            hora:'16:00',
            sintomas: 'solo duerme'
        };

        
        citas.agregarCita(citaObj);

        // prueba
        expect(citas).toMatchSnapshot();
    });
    test ('actualizar cita',()=>{
        const citaActualizada = {
            id,
            mascota: 'Nuevo nombre2',
            propietario: 'rafa2',
            telefono: '19191919',
            fecha: '10-12-2021',
            hora:'16:00',
            sintomas: 'solo duerme'
        };
        citas.editarCita(citaActualizada);
        expect(citas).toMatchSnapshot(); // encuentra la funcion actualizada y la va a actualizar al snapshot
    // npm t -- -u para actualizar el snapshot 
    })

    test ('eliminar cita',()=>{
        citas.eliminarCita(id)

        expect(citas).toMatchSnapshot();

    });



});



