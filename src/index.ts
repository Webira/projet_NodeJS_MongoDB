import fastifyMongodb from '@fastify/mongodb'
import fastify from 'fastify'
import fastifyPlugin from 'fastify-plugin'
//import calculatrix from './models/calculatrix'
import pizzeria from './routes/pizzeria'

// Création d'une application fastify
const app = fastify({ logger: true })

//------------------calculatrice----------------------------
/**
 * Création d'un type pour notre route :
 *
type Calculatrice = {
  Params: {
    x: string
    y: string
  }
}
/**
 * On déclare la route :
 *
app.get<Calculatrice>('/add/:x/:y', request => {
  // Nous utilisons la request pour récupérer le contenu des paramètres
  // x  et y :
  const x = parseInt(request.params.x)
  const y = parseInt(request.params.y)
  return x+y
})

app.get<Calculatrice>('/sub/:x/:y', request => {
  
  const x = parseInt(request.params.x)
  const y = parseInt(request.params.y)
  return x-y
})

app.get<Calculatrice>('/mul/:x/:y', request => {
  
  const x = parseInt(request.params.x)
  const y = parseInt(request.params.y)
  return x*y
})

app.get<Calculatrice>('/div/:x/:y', (request,reply) => {
  
  const x = parseInt(request.params.x)
  const y = parseInt(request.params.y)
  // Je m'assure que nous ne réalisons pas de division par 0
  if (y === 0) {
    reply.code(400)

    return 'Division par 0 impossible !'
  }
  return x/y
})*/

//--------------------calculatrix.ts----??????----------------------------

//app.register(fastifyPlugin(calculatrix))

//-----------------------pizzeria.ts------------------------------------

app.register(fastifyMongodb, {url: process.env.DATABASE_URL, database: 'pizzeriadb',})

app.register(fastifyPlugin(pizzeria))



//----------------------------------------------------------------------------

// Écoute un port et un host.  Nous devons lancer (listen) notre serveur :
app.listen({ port: parseInt(process.env.PORT || ''), host: process.env.HOST},() => {
    // Affiche un message dans la console nous indiquant que le serveur est démarré
    console.log("Le serveur pour la calculatrice sur l'address : http://127.0.0.1:5353")
  })


//-----------------------------------------------------------------
//   console.log(process.env.NODE_ENV)
//   console.log(
//   `Bonjour ${process.env.FIRSTNAME} ${process.env.LASTNAME}, comment allez-vous ?`,
// )