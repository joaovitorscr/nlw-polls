import fastify from 'fastify'
import { createPoll } from './routes/create-poll'
import { GetPoll } from './routes/get-poll'
import { VoteOnPoll } from './routes/vote-on-poll'
import cookie from '@fastify/cookie'
import websocket from '@fastify/websocket'
import { pollResults } from './ws/poll-results'

const app = fastify()

app.register(cookie, {
  secret: 'polls-app-nlw',
  hook: 'onRequest',
  parseOptions: {},
})
app.register(websocket)

app.register(createPoll)
app.register(GetPoll)
app.register(VoteOnPoll)
app.register(pollResults)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server running!')
  })
