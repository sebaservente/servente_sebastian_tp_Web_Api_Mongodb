import mongodb from 'mongodb';

const client = new mongodb.MongoClient("mongodb://localhost:27017");

export async function conexion (callBack){

    await client.connect()

    let resultado = await callBack(client.db("wildboard"))

    client.close()

    return resultado
}

export default {
    conexion
}
