
import { FastifyInstance } from "fastify";
import WebPush from 'web-push'
import { z } from "zod";

//console.log(WebPush.generateVAPIDKeys()) //isso gera chaves public e privada

const publicKey = 'BG_QXJJ1lMN44ZwFBDlP60CPvpD8TbvKCQsFsZxsgIaqL6dDZP9XzqD7gWkhxbhX21xhCuInZEuWjyX9JKGbiD4'
const privateKey = 'P77VLpTWcm-NGoanQlUKUhHbb3ZwFHhGUub5zPABUP4'

WebPush.setVapidDetails(
    'http://localhost:3333', publicKey, privateKey
)

export async function notificationsRoutes(app: FastifyInstance) {
  
  app.get('/push/public_key', () => {
    return {
        publicKey,
    }
  })

  app.post('/push/register', (request, reply) => {  //associa o id do usuario logado
    console.log(request.body)

    
    return reply.status(201)
  })

  app.post('/push/send', async (request, reply) => {
    const sendPushBody = z.object({
        subscription: z.object({
            endpoint: z.string(),
            expirationTime: z.null(),
            keys: z.object({
                p256dh: z.string(),
                auth: z.string()
            })
        })
    })

  

    const {subscription} = sendPushBody.parse(request.body)

    setTimeout(() => {
      WebPush.sendNotification(subscription, 'Hello do back')
    }, 5000)
    
    
    return reply.status(201)
  })

}
