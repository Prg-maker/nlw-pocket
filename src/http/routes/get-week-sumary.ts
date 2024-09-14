import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getWeekSummary } from '../../function/get-week-summary'

export const getWeekSummaryRouter: FastifyPluginAsyncZod = async (
  app,
  _opts
) => {
  app.get('/summary', async () => {
    const { summary } = await getWeekSummary()

    return { summary }
  })
}
