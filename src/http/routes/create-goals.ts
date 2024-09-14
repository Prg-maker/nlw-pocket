import { z } from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createGoal } from '../../function/create-goal'

export const createGoalRoute: FastifyPluginAsyncZod = async (app, _opts) => {
  app.post(
    '/goals',
    {
      schema: {
        body: z.object({
          title: z.string(),
          desiredWeekFrequency: z.number().int().min(1).max(7),
        }),
      },
    },

    async request => {
      const { desiredWeekFrequency, title } = request.body
      await createGoal({
        title,
        desiredWeekFrequency,
      })
    }
  )
}
