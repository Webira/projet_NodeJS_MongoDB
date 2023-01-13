import { FastifyInstance } from 'fastify'
import { NewPizzaModel, NewPizzaSchema, PizzaListModel, 
  PizzaListSchema, PizzaModel, PizzaSchema, PizzaType } from '../models/pizzeria'


// Plugin fastify contenant la route pour le calculatrix
export default async function pizzeria(app: FastifyInstance) {

/**    New pizza
     * Création des options permettant de schématiser notre route
     */
const NewpizzaOptions = {
  schema: {
    // On définie le schéma du body
    body: NewPizzaSchema,
    // On définie le schéma du retour de la fonction
    response: {
      // Lorsque tout ce passe bien
      200: PizzaSchema,
    },
  },
}

app.post('/pizzeria', NewpizzaOptions, async request => {

    const ResultNewPizza = await app.mongo.db?.collection('pizzeria').
    insertOne(NewPizzaModel.parse(request.body))

    return PizzaModel.parse(await app.mongo.db?.collection('pizzeria').findOne({
      _id: ResultNewPizza?.insertedId,
    }))
})

    /** List de pizzas
     * Création des options permettant de schématiser notre route
     */
    const ListpizzaOptions = {
      schema: {
      response: {
        200: PizzaListSchema,
      },
      },
    }
    app.get('/pizzeria', ListpizzaOptions, async request => {
        // Je vais devoir valider le body de la request 
        //const ResultPizzaList = await app.mongo.db?.collection('pizzeria').
        //find(PizzaListModel.parse(request))

          return PizzaListModel.parse(await app.mongo.db?.collection('pizzeria')
            .find()
            .limit(5)
            .sort({ name: 1 })
            .toArray(),
        )
    })
    /** List de pizzas
    * Création des options permettant de schématiser notre route
    */
   const DeletepizzaOptions = {
     schema: {
     response: {
       200: NewPizzaSchema,
     },
     }
    }
    app.get('/pizzeria', DeletepizzaOptions, async request => {

    // const result = await app.mongo.db?.collection('pizzas').deleteOne({
    //   _id: new ObjectId('sdmhfldhdlskfhlkshflkdshfkfhsd'),
    // })
          //?????????????
    return NewPizzaModel.parse(await app.mongo.db?.collection('pizzeria')
    .find()
    )
    })

}