const express = require('express');
const { Router } = require('express');
const router = express.Router();

//controladores
const pacienteController = require('../controllers/pacienteControllers')

module.exports = function() {

    //Agrega nuevos pacientes a la BD via POST
    router.post('/pacientes',
    pacienteController.nuevoCliente
    );

    //Obtiene todos los registros de pacientes en la BD via GET
    router.get('/pacientes', 
    pacienteController.obtenerPacientes
    );

    //Obtiene un paciente en especifico (ID) via POST
    router.get('/pacientes/:id',
    pacienteController.obtenerPaciente)

    //Actualiza un registro con un ID especifico via PUT
    router.put('/pacientes/:id', pacienteController.actualizarPaciente );

    //Elimina un paciente por su ID via DELETE
    router.delete('/pacientes/:id', pacienteController.eliminarPaciente);

    return router;
}