import assert from "assert"
import request from "supertest"
import app from ".."

describe("GraphQL-Method-Block Test", () => {
    it("POST send Query", async () => {
        const query = `
            query{
                test1
            }
        `
        const req = await request(app)
            .post("/api")
            .set("Content-Type", "application/json")
            .send(JSON.stringify({ query }))

        assert.strictEqual(req.body.error, "Must be sent to GET method")
    })

    it("GET send Query", async () => {
        const query = `
            query{
                test1
            }
        `
        const req = await request(app)
            .get(`/api?query=${query}`)

        assert.strictEqual(req.body.data.test1, "Server On")
    })

    it("GET send Mutation", async () => {
        const query = `
            mutation{
                test2
            }
        `
        const req = await request(app)
            .post(`/api`)
            .set("Content-Type", "application/json")
            .send(JSON.stringify({ query }))


        assert.strictEqual(req.body.data.test2, "Server On")

    })
})