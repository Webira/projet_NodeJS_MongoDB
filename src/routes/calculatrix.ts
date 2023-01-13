import { FastifyInstance } from 'fastify'
import {CalculModel, CalculType, CalculSchema} from '../models/calculatrix'
import {ResulModel, ResultType,ResultSchema} from '../models/calculatrix'

// Plugin fastify contenant la route pour le calculatrix
export default async function calulatrixRoute(app: FastifyInstance) {
    /**
     * Création des options permettant de schématiser notre route
     */
    const calculOptions = {
      schema: {
        // On définie le schéma du body
        body: CalculSchema,
        // On définie le schéma du retour de la fonction
        response: {
          // Lorsque tout ce passe bien
          200: ResultSchema,
        },
      },
    }

    /**
   * Route pour la calculatrix
   */
  //Version 1: avec safeParse:
    //app.post<{ Body: CalculType }>('/models/calculatrix',calculOptions, async (request, reply) => {

           // Pour lancer la validation avec zod :
      //  const calcul = CalculModel.safeParse(request.body)
          // On test si il y a un erreur
      //   if (!calcul.success) {
      //       reply.code(400)
      //       return calcul.error
      //     }

  //Version 2: avec parse et if: ?????
    app.post('/calculatrix', calculOptions, async request => {
      // Je vais devoir valider le body de la request et
      // récupérer un CalculType
      const calcul = CalculModel.parse(request.body)
  
      // On peut récupérer les données du calcul
      const { operation, x, y } = calcul
  
      // if (operation === 'addition') {
      //   return ResultModel.parse({ resultat: x + y })
      // }
  
      // if (operation === 'division') {
      //   return ResultModel.parse({ resultat: x / y })
      // }
  
      // if (operation === 'multiplication') {
      //   return ResultModel.parse({ resultat: x * y })
      // }
  
      // return ResultModel.parse({ resultat: x - y })

  // Version 3: avec parse et ???
      return operation === 'addition'
        ? ResulModel.parse({ resultat: x + y })
        : operation === 'division'
        ? ResulModel.parse({ resultat: x / y })
        : operation === 'multiplication'
        ? ResulModel.parse({ resultat: x * y })
        : ResulModel.parse({ resultat: x - y })
    })
  }    
