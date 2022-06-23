/*
- Recuperar todos os espécimes de uma determinada espécie

- Recuperar todos os espécimes que vivem em uma determinada jaula

- Recuperar todos os espécimes que são cuidados por um determinado zelador

 */

import sql from "../config/db";

import Jaula from "../models/Jaula";
import Especie from "../models/Especie";
import Zelador from "../models/Zelador";

export const recupEspecimeDeEspecie = async (especie:Especie) => {
    const response = await sql`    
        SELECT * FROM especime
        JOIN especie ON especie.id = especime.id_especie 
        WHERE especie.id = ${especie.id}
    `
}

export const recupEspecimeDaJaula = async (jaula:Jaula) => {
    const response = await sql`    
        SELECT * FROM especime
        JOIN jaula ON jaula.codigo = especime.id_jaula
        WHERE codigo = ${jaula.codigo}
    `
}

export const recupEspecimeDeZelador =async (zelador:Zelador) => {
    const response = await sql`
    
    `
    
}
