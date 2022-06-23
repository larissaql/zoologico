import sql, { clearData, createTables, loadInitialData } from './config/db'
import { recupEspeciePeloHabitat, recupEspeciePeloNomeCientifico } from './controllers/EspecieController'
import { recupJaulaDeZelador } from './controllers/JaulaController'
import { recupEspecimeDeEspecie, recupEspecimeDaJaula, recupEspecimeDeZelador } from './controllers/EspecimeController'
import { recupZeladorDeEspecieme } from './controllers/ZeladorController'

const run = async () => {
  await createTables()
  await clearData()
  await loadInitialData()

  /**
   * Execute as funções responsáveis pelas consultas aqui!
   */

  const habitatDaEspecie = await recupEspeciePeloHabitat('mata atlântica brasileira')
  console.log(habitatDaEspecie)

  const nomeCientificoDaEspecie = await recupEspeciePeloNomeCientifico('Leontopithecus rosalia')
  console.log(nomeCientificoDaEspecie)

  const especimeDaEspecie = await recupEspecimeDeEspecie(nomeCientificoDaEspecie)
  console.log(especimeDaEspecie)

  const jaulaDaEspecime = await recupEspecimeDaJaula('00009')
  console.log(jaulaDaEspecime)

  const especimeZelador = await recupEspecimeDeZelador('Pedro Martinez Bezerra')
  console.log(especimeZelador)

  const jaulaZelador = await recupJaulaDeZelador('Pedro Martinez Bezerra')
  console.log(jaulaZelador)

  const zeladores = await recupZeladorDeEspecieme('12002')
  console.log(zeladores)

  /**
   * Fim das consultas
   */

  await sql.end()
  console.log('Mal feito desfeito')
}

run()
