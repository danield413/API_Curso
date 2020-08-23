const Paciente = require('../models/paciente');

//cuando se crea un nuevo cliente
exports.nuevoCliente = async (req,res, next) => {
    //crear objeto de paciente con datos de req.body

    const paciente = new Paciente(req.body);
    console.log(paciente);

    try {
        await paciente.save();
        res.json({mensaje: 'El cliente se agregó correctamente'});

    } catch (error) {
        console.log(error);
        next();
    }    
}

//obtiene todos los pacientes

exports.obtenerPacientes = async (req,res,next) => {
    try {
        const pacientes = await Paciente.find({});
        res.json(pacientes);

    } catch (error) {
        console.log(error);
        next();
    }
}

// Obtiene un paciente en especifico por su ID

exports.obtenerPaciente = async (req,res,next) => {
    try {
        const paciente = await Paciente.findById(req.params.id);
        res.json(paciente);

    } catch (error) {
        console.log(error);
        next();
    }
}

//Actualiza un registro por su ID 

exports.actualizarPaciente = async (req,res,next) => {
    try {
        const paciente = await Paciente.findOneAndUpdate({_id : req.params.id} , req.body, {
            new: true
        });
        res.json(paciente)

    } catch (error) {
        console.log(error);
        next();
    }
}

//Eliminar un paciente por su ID 

exports.eliminarPaciente = async (req,res,next) => {
      try {
        await Paciente.findOneAndDelete({ _id: req.params.id });
        res.json({ mensaje: 'Eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}