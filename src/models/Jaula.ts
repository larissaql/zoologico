import { Zelador } from "./Zelador"

export type Jaula = {
    codigo: string
    area: string
    zelador: Zelador[]
}

export const getJaula = (jsonObj: any): Jaula => {
    const {codigo, area, zelador} = jsonObj

    const jaula: Jaula = {
        codigo,
        area,
        zelador
    }
    return jaula
}
export default Jaula