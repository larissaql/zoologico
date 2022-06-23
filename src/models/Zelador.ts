export type Zelador = {
    matricula: string
    nome: string
    dataNascimento: Date
}

export const getZelador = (jsonObj: any): Zelador => {
    const { matricula, nome, data_nascimento } = jsonObj
    const zelador: Zelador = {
        matricula,
        nome,
        dataNascimento: data_nascimento
    }
    return zelador
}
export default Zelador