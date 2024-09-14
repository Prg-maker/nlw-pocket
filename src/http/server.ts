import fastify from 'fastify'
import { createGoalRoute } from './routes/create-goals'
import { createGoalCompletionRoute } from './routes/create-completion'
import { getPedingGoalsRoute } from './routes/get-peding-goals'
import fastifyCors from '@fastify/cors'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { getWeekSummaryRouter } from './routes/get-week-sumary'

const app = fastify().withTypeProvider<ZodTypeProvider>()
app.register(fastifyCors, {
  origin: '*',
})
app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createGoalRoute)
app.register(createGoalCompletionRoute)
app.register(getPedingGoalsRoute)
app.register(getWeekSummaryRouter)
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server is runing')
  })
