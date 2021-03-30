import { NextFunction, Request, Response } from "express"

export default (req: Request, res: Response, next: NextFunction) => {
    if ("method" in req && req.method === "POST") {
        if ("body" in req && "query" in req.body) {
            if (req.body.query.includes("mutation")) {
                return next()
            }
            else {
                return res.status(400).send({
                    error: "Must be sent to GET method"
                })
            }
        }
        else {
            return res.status(400).send({
                error: "Must be sent to GET method"
            })
        }
    }
    return next()
}