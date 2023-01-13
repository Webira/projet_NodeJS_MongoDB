// index.ts
import fastify from 'fastify'
import fastifyPlugin from 'fastify-plugin'
import calculatrix from './routes/calculatrix'
import mongodb from '@fastify/mongodb'
import pizzas from './routes/pizzas'

// Création d'une application fastify
const app = fastify({ logger: true })

///--console.warn(process.env.DATABASE_URL)

// Je connécte une base de données
app.register(mongodb, {
url: process.env.DATABASE_URL,
database: 'pizzas',
})

// Je connécte toutes mes routes
app.register(fastifyPlugin(pizzas))
app.register(fastifyPlugin(calculatrix))

// Démarage du serveur http
app.listen({ port: 5353, host: '127.0.0.1' }, () => {
console.log("Le serveur http est prêt sur l'adresse : http://127.0.0.1:5353")
})

//--------------------src/models/pizzas.ts---------------------
import { z } from 'zod'
import zodToJsonSchema from 'zod-to-json-schema'
/\*\*

- @module models.pizzas
-
- @description
- Contient les models, types et schémas pour des pizzas
  \*/
  /\*\*
- Définission de PizzaModel
  \*/
  export const PizzaModel = z.object({
  \_id: z.preprocess(id => `${id}`, z.string()),
  name: z.string().min(3),
  prix: z.number(),
  })
  /\*\*
- Type de PizzaModel
  \*/
  export type PizzaType = z.infer<typeof PizzaModel>
  /\*\*
- Schéma de PizzaModel
  \*/
  export const PizzaSchema = zodToJsonSchema(PizzaModel)
  /\*\*
- Définission de NewPizzaModel
  \*/
  export const NewPizzaModel = PizzaModel.omit({ \_id: true })
  /\*\*
- Type de NewPizzaModel
  \*/
  export type NewPizzaType = z.infer<typeof NewPizzaModel>
  /\*\*
- Schéma de NewPizzaModel
  \*/
  export const NewPizzaSchema = zodToJsonSchema(NewPizzaModel)
  /\*\*
- Définission de PizzaListModel
  \*/
  export const PizzaListModel = z.array(PizzaModel)
  /\*\*
- Type de PizzaListModel
  \*/
  export type PizzaListType = z.infer<typeof PizzaListModel>
  /\*\*
- Schéma de PizzaListModel
  \*/
  export const PizzaListSchema = zodToJsonSchema(PizzaListModel)

///---------------src/routes/pizzas.ts---------------------------------

import { FastifyInstance } from 'fastify'
import {
NewPizzaModel,
NewPizzaSchema,
PizzaModel,
PizzaSchema,
//PizzaType,
} from '../models/pizzas'

/\*\*

- @module routes.pizzas
-
- @description
- Contient toutes les routes concernant les pizzas
  \*/
  /\*\*
- Plugin contenant toutes les routes des pizzas
  \*/
  export default async function pizzas(app: FastifyInstance) {
  /\*\*

  - Option de la route de création d'une nouvelle pizza
    \*/
    const newPizzaOptions = {
    schema: {
    body: NewPizzaSchema,
    response: {
    200: PizzaSchema,
    },
    },
    }
    /\*\*
  - Route permettant de créer une nouvelle pizza
    \*/
    app.post('/pizzas', newPizzaOptions, async request => {
    // Je récupére la nouvelle pizza
    const newPizza = NewPizzaModel.parse(request.body)


      // On l'enregistre dans la base de donnée

      const result = await app.mongo.db?.collection('pizzas').insertOne(newPizza)

      // Je récupére la pizza depuis la base de donées
      return PizzaModel.parse(

        await app.mongo.db?.collection('pizzas').findOne({
          _id: result?.insertedId,
        }),
      )

  })
  }
