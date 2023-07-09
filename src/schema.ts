import { buildSchema } from 'type-graphql'
import { type GraphQLSchema } from 'graphql'

import AnimeResolver from './resolvers/AnimeResolver'

export default async function schema (): Promise<GraphQLSchema> {
  const schema = await buildSchema({
    resolvers: [AnimeResolver]
  })

  return schema
}
