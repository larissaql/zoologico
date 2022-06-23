
/*
- Recuperar todos os zeladores que cuidam de espécimes de uma determinada espécie
 */

import sql from "../config/db"

import Especie from "../models/Especie"
import { getZelador } from "../models/Zelador"


export const getZeladorByEspecie = async (especie: Especie) => {
    const responseArray = await sql`
    
    `
    const  zelador = responseArray.map((jsonObj) => getZelador(jsonObj))

    return zelador
}
