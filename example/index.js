import { ApolloServer } from "apollo-server-express"
import { readFileSync } from "fs"
import { createServer } from "http"

import block from "../lib"
import express from "express"
import expressPlayground from "graphql-playground-middleware-express"
import resolvers from "./resolvers"
const typeDefs = readFileSync("./typeDefs.graphql", "utf-8")

const app = express()

app.use("/api", block)
app.get("/graphql", expressPlayground({ endpoint: "/api" }))

const start = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    server.applyMiddleware({
        app,
        path: "/api"
    })

    const httpServer = createServer(app)
    httpServer.timeout = 5000
    httpServer.listen({ port: 3000 }, () => {
        console.log(`GraphQL Server Running at http://localhost:${3000}/api`)
    })
}

start()

export default app