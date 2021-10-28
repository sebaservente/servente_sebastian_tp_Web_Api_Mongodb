import fs from "fs";
import {ObjectId} from "mongodb";
import dataBase from "./dataBase.js";

export async function getAll (){
    return dataBase.conexion(async function (db){
        return await db.collection("testimonios").find({}).toArray()
    })
}
export async function create(entity){
    return dataBase.conexion(async function (db){
        await db.collection("testimonios").insertOne(entity)
        return entity;
    })

}
export async function findOne(id){
    return dataBase.conexion(async function (db){
       return await db.collection("testimonios").findOne({_id: ObjectId(id)})
    })
}

export async function putOne(id){
    return dataBase.conexion(async function (db){
        return await db.collection("testimonios").replaceOne({_id: ObjectId(id)},
            {
                $set:{
                    name: name
                }
            })
    })
}
export async function patcOne(id){
    return dataBase.conexion(async function (db){
        return await db.collection("testimonios").updateOne({_id: ObjectId(id)},
            {
                name: name
            })
    })
}
export async function deleteOne(id){
    return dataBase.conexion(async function (db){
        return await db.deleteOne("testimonios").deleteOne({_id: ObjectId(id)})
    })
}
export default  {
    getAll,
    create,
    findOne,
    putOne,
    patcOne,
    deleteOne
}