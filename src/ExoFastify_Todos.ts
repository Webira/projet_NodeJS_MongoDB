import fastify from "fastify"
const app = fastify()
/**
 * Représente une chose de à faire
 */
 type TodoItem = {
    id: string | number
    title: string
    done: boolean
  }
  
  /**
   * Réprésente une list de chose à faire
   */
  type TodoList = TodoItem[]
  
  /**
   * Contient la base de données
   */
  const todoList: TodoList = [
    {
      id: 1,
      title: 'Acheter du chocolat',
      done: false,
    },
  ]
  //1.Récupérer la liste des choses à faire
app.get('/todos', () =>todoList)
  
  //2
app.post('/todos', request =>{
    const todo = request.body
})

//????????????



  app.listen({host: process.env.HOST, port: parseInt(process.env.PORT || '5353')
    }, () =>{console.log(`Le server de todolist est pret sur l'address http://localhost:5353`,)
    },
  )

