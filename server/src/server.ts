//BACK-END 

import Fastify from "fastify";
import cors from '@fastify/cors'
import { appRoutes } from "./routes";
import { notificationsRoutes} from './notifications-routes'

const app = Fastify()

app.register(notificationsRoutes)
app.register(cors)
app.register(appRoutes)



//Rota para aparecer na tela
// '/' seria a rota, caso eu mude para /hello
// Teria que mudar também para acessar
//Async e Await vão retornar os dados mais rapidos
// app.get('/', async () => {
//     const habits = await prisma.habit.findMany()

//     return habits
// })

// Porta do localhost
app.listen({
    port: 3333,
    host: '0.0.0.0',
}).then(() => {
    console.log('HTTP Server running!')
})