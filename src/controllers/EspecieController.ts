/*
- Recuperar todas as espécies cujo habitat contenha uma determinada substring de consulta (Ex: "floresta", "mata"), ignorando caracteres maiúsculos e minúsculos;

- Recuperar uma espécie pelo seu nome científico (ignorar caracteres maiúsculos e minúsculos).

*/
import sql from "../config/db"
import { getEspecie }  from "../models/Especie"

export const recupEspeciePeloHabitat = async (habitat:string) => {
    const response = await sql`  
        SELECT * FROM especie 
        WHERE habitat LIKE ${habitat}
    `
    const especie = response.map((jsonObj) => getEspecie(jsonObj))

    return especie
}

export const recupEspeciePeloNomeCientifico = async (nomeCientifico:string) => {
    const response = await sql`  
        SELECT * FROM especie
        WHERE nome_cientifico LIKE ${nomeCientifico}
    `
    const especie = response.map((jsonObj) => getEspecie(jsonObj))

    return especie
    
}