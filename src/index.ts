import sql, { clearData, createTables, loadInitialData } from './config/db'
import { recupEspeciePeloHabitat, recupEspeciePeloNomeCientifico } from './controllers/EspecieController'
import { codigoDaJaula, recupJaulaDeZelador } from './controllers/JaulaController'
import { recupEspecimeDeEspecie, recupEspecimeDaJaula, recupEspecimeDeZelador } from './controllers/EspecimeController'
import { matriculaDoZelador, recupZeladorDeEspecieme } from './controllers/ZeladorController'

const run = async () => {
  await createTables()
  await clearData()
  await loadInitialData()

  /**
   * Execute as funções responsáveis pelas consultas aqui!
   */
  let codJaula = await codigoDaJaula('00009')

  let matZelador = await matriculaDoZelador('12002')
  
  const habitatDaEspecie = await recupEspeciePeloHabitat('mata atlântica brasileira')
  console.log(habitatDaEspecie)

  const nomeCientificoDaEspecie = await recupEspeciePeloNomeCientifico('Leontopithecus rosalia')
  console.log(nomeCientificoDaEspecie)

  const especimeDaEspecie = await
  console.log()

  const jaulaDaEspecime = await recupEspecimeDaJaula(codJaula)
  console.log(jaulaDaEspecime)

  const especimeZelador = await recupEspecimeDeZelador(matZelador)
  console.log(especimeZelador)

  const jaulaZelador = await recupJaulaDeZelador(matZelador)
  console.log(jaulaZelador)


  /**
   * Fim das consultas
   */

  await sql.end()
  console.log('Mal feito desfeito')
}

run()
