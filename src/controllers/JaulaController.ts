/*
 - Recuperar todas as jaulas que são cuidadas por um determinado zelador
 */

import sql from "../config/db";

import Zelador from "../models/Zelador";
import Jaula, { getJaula} from "../models/Jaula";

export const recupJaulaDeZelador = async (zelador: Zelador) => {
    const response = await sql` 
        SELECT * FROM jaula
        JOIN jaula_zelador ON jaula.codigo = jaula_zelador.id_jaula
        JOIN zelador ON jaula_zelador.id_zelador = zelador.matricula
        WHERE matricula LIKE ${zelador.matricula}
    `
    const jaula = response.map(async (jsonObj) => await getJaula(jsonObj))

    return jaula
    
}

export const codigoDaJaula = async (codigo: string) => {
    const response = await sql`
        SELECT * FROM jaula
        WHERE codigo LIKE codigo
    `
    const jaula = response.map(async (jsonObj) => await getJaula(jsonObj))

    return jaula[0]
}