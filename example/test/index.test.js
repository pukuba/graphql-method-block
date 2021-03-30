import request from "supertest"
import app from ".."

describe("GraphQL-Method-Block Test", () => {
    it("Post send Query", async () => {
        const query = `
            query{
                test
            }
        `
        const req = await request(app)
            .post("/api")
            .set("Content-Type", "application/json")
            .send(JSON.stringify({ query }))
            .expect(200)
        console.log(req.body)
    })
})