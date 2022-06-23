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

  /**
   * Fim das consultas
   */

  await sql.end()
  console.log('Mal feito desfeito')
}

run()
