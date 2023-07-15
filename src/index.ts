/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import 'reflect-metadata'
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { createHandler } from 'graphql-http/lib/use/express'

import schema from './schema'

async function main () {
  const app = express()

  const port = process.env.PORT

  if (port == null) { throw new Error('PORT must be set') }

  app.use(cors())

  app.all('/graphql', createHandler({ schema }))

  app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
  })
}

main()
