import express from "express"
import cors from "cors"
import usersRoutes from './routes/users'
import postsRoutes from './routes/posts'
import { connect } from './database'
import { PORT } from "./configurations"


export class Server {
    constructor() {
        this.app = express()
        this.port = PORT || 9000

        this.configure()
        this.addRoutes()
        this.connectToDb()
    }

    addRoutes() {
        this.app.use('/api/users', usersRoutes)
        this.app.use('/api/posts', postsRoutes)
        this.app.get('/', (req, res) => res.status(200).send('welcome to geek-post'))
    }

    configure() {
        this.app.use(cors())
        this.app.use(express.json())
    }

    async connectToDb() { await connect() }

    start() {
        this.app.listen(this.port, () => {
            console.info(`Server start in port ${this.port}`)
        })
    }
}
