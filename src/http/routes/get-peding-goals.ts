import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getWeekPendingGoals } from '../../function/get-week-pending-goals'

export const getPedingGoalsRoute: FastifyPluginAsyncZod = async (
  app,
  _optss
) => {
  app.get('/peding-goals', async () => {
    const { pedingGoals } = await getWeekPendingGoals()

    return { pedingGoals }
  })
}
