import repository from "../model/repo.dao.js"
import {response} from "express";

export function index (req, res){
    res.render('index',{});
}
export function listar(req,res){
    repository.getAll()
        .then(function (testi){
            res.render(
                'testimonios', // vista
                { lista: testi }
            );
        })
        .catch(function (err){
            res.status(500).json({err: 500, msg: "NO puedo leer el testimonio.."})
        })

}
export function nuevo(req, res){
    res.render('formulario',{});
}
export function crearNuevo (req, res){
    repository.create(req.body)
        .then(function (entity){
            res.render('exito',{entity})
        })
        .catch(function (err){
            res.status(500).json({err: 500, msg: "NO puedo leer el testimonio.."})
        })
}
export default {
    index,
    listar,
    nuevo,
    crearNuevo
}

