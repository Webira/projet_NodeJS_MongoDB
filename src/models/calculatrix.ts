import { z } from 'zod'
import zodToJsonSchema from 'zod-to-json-schema'

//Créer un model pour lancer un calcul : CalculModel
export const CalculModel = z.object({
    // operationAdd: z.string(),
    // operationSub: z.string(),
    // operationMul: z.string(),
    // operationDiv: z.string(),
    operation: z.enum(['addition', 'soustraction', 'multiplication', 'division']),
    x: z.number().min(1),
    y: z.number().min(1),
  })
//Créer un type CalculType en utilisant z.infer et créer CalculSchema en utilisant zodToJsonSchema.
  export type CalculType = z.infer<typeof CalculModel>
  export const CalculSchema = zodToJsonSchema(CalculModel)

//Créer un model ResulModel
  export const ResulModel = z.object({
        resultat: z.number().min(1),
  })
  //Créer un type ResultType en utilisant z.infer et créer ResultSchema
  export type ResultType = z.infer<typeof ResulModel>
  export const ResultSchema = zodToJsonSchema(ResulModel)

  