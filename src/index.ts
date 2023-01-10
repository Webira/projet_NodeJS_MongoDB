import fastify from 'fastify'

// Création d'une application fastify
const app = fastify()

// Écoute un port et un host
app.listen({ port: 5353, host: '127.0.0.1' }, () => {
    // Affiche un message dans la console nous indiquant que le serveur est démarré
    console.log("Le serveur http est prêt sur l'address : http://127.0.0.1:5353")
  })