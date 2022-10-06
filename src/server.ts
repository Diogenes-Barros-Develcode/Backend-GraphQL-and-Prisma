
import path from 'node:path'
import "reflect-metadata";
import { ApolloServer, gql } from 'apollo-server'
import { buildSchema } from 'type-graphql'

import { context } from './context'
import { UserResolver } from './resolvers/user-resolver'

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [
            UserResolver,
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql')
    })

    const server = new ApolloServer({
        schema,
        context
    })

    const { url } = await server.listen()

    console.log(`HTTP server running on ${url}`)
}

bootstrap()