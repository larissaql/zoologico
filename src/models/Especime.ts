import Especie from "./Especie"
import { Zelador } from "./Zelador"

export type Especime = {
    id: number
    nroDeSerie: number
    apelido: string
    especie: Especie
    zelador: Zelador[]
}


export const getEspecime = async (jsonObj) => {
    const { id, nro_de_serie, apelido, especie, zelador } = jsonObj
    
    const especime: Especime = {
        id,
        nroDeSerie: nro_de_serie,
        apelido,
        especie,
        zelador
    }
    return especime
}
export default Especime