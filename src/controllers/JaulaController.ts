/*
 - Recuperar todas as jaulas que são cuidadas por um determinado zelador
 */

import sql from "../config/db";

import Zelador from "../models/Zelador";
import { getJaula} from "../models/Jaula";

export const recupJaulaDeZelador = async (zelador: Zelador) => {
    const response = await sql` 
        SELECT * FROM jaula
        JOIN jaula_zelador ON jaula_zelador.id_jaula = jaula.codigo
        JOIN zelador ON zelador.matricula = jaula_zelador.id_zelador
        WHERE matricula LIKE ${zelador.matricula}
    `
    const jaula = response.map(async (jsonObj) => await getJaula(jsonObj))
    
}