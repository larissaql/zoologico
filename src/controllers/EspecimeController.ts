/*
- Recuperar todos os espécimes de uma determinada espécie

- Recuperar todos os espécimes que vivem em uma determinada jaula

- Recuperar todos os espécimes que são cuidados por um determinado zelador

 */

import sql from "../config/db";

import Jaula from "../models/Jaula";
import Especie from "../models/Especie";
import Zelador from "../models/Zelador";
import { getEspecime } from "../models/Especime";

export const recupEspecimeDeEspecie = async (especie:Especie) => {
    const response = await sql`    
        SELECT * FROM especime
        JOIN especie ON especime.id_especie = especie.id
        WHERE especie.id = ${especie.id}
    `
    const especime = response.map(async (jsonObj) => await getEspecime(jsonObj))

    return especime
}

export const recupEspecimeDaJaula = async (jaula:Jaula) => {
    const response = await sql`    
        SELECT * FROM especime
        JOIN jaula ON especime.id_jaula = jaula.codigo
        WHERE codigo = ${jaula.codigo}
    `
    const especime = response.map(async (jsonObj) => await getEspecime(jsonObj))

    return especime
}

export const recupEspecimeDeZelador =async (zelador:Zelador) => {
    const response = await sql`
        SELECT * FROM especime
        JOIN jaula_zelador ON  especime.id_zelador =jaula_zelador.id_zelador
        WHERE id_zelador LIKE ${zelador.matricula}

    `
    const especime = response.map(async (jsonObj) => await getEspecime(jsonObj))

    return especime
}
