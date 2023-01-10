import fastify from 'fastify'

// Création d'une application fastify
const app = fastify()

// Type définissant les paramètre à envoyer
// à notre route d'addition
type AddRoute = {
    Params: {
      x: string
      y: string
    }
  }
type OperationOwner = {
    Querystring: {
      operation?: 'add' | 'sub' | 'div' | 'mul'
    }
  }
  
  app.get<AddRoute & OperationOwner>('/calc/:x/:y', (request, reply) => {
    const operation = request.query.operation || 'add'
    const x = parseInt(request.params.x)
    const y = parseInt(request.params.y)
  
    if (operation === 'add') {
      return x + y
    }
  
    if (operation === 'sub') {
      return x - y
    }
  
    if (operation === 'mul') {
      return x * y
    }
  
    if (y === 0) {
      reply.code(400)
  
      return 'Division par 0 impossible !'
    }
  
    return x / y
  })
  
  // Nous devons lancer (listen) notre serveur :
  app.listen(
    { port: parseInt(process.env.PORT || '5353'), host: process.env.HOST },
    () => {
      console.log(
        "Le serveur pour la calculatrice est prêt sur l'adresse http://127.0.0.1:5353",
      )
    },
  )