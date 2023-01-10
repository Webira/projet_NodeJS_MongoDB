import fastify from 'fastify'

// Création d'une application fastify
const app = fastify()

/**
 * Création d'un type pour notre route :
 */
type Calculatrice = {
  Params: {
    x: string
    y: string
    
  }
}

/**
 * On déclare la route :
 */
app.get<Calculatrice>('/add/:x/:y', request => {
  // Nous utilisons la request pour récupérer le contenu des paramètres
  // x  et y :

  const x = parseInt(request.params.x)
  const y = parseInt(request.params.y)

  return x+y
})


// Écoute un port et un host
app.listen({ port: parseInt(process.env.PORT||' '), host: process.env.HOST},() => {
    // Affiche un message dans la console nous indiquant que le serveur est démarré
    console.log("Le serveur pour la calculatrice sur l'address : http://127.0.0.1:5353")
  })