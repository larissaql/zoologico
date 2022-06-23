
/*
- Recuperar todos os zeladores que cuidam de espécimes de uma determinada espécie
 */

import sql from "../config/db"

import Especie from "../models/Especie"
import { getZelador } from "../models/Zelador"


export const recupZeladorDeEspecieme = async (especie: Especie) => {
    const responseArray = await sql`
        SELECT zelador.matricula, zelador.nome, zelador.data_nascimento FROM zelador
        JOIN jaula_zelador ON zelador.matricula = jaula_zelador.id_zelador 
        JOIN especime ON  jaula_zelador.id_jaula = especime.id_jaula
        JOIN especie ON especie.id  = especime.id_especie
        WHERE especie.id = ${especie.id}
        GROUP BY zelador.matricula
    
    `
    const  zelador = responseArray.map((jsonObj) => getZelador(jsonObj))

    return zelador
}
