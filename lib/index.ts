import { NextFunction, Request, Response } from "express"

export default (req: Request, res: Response, next: NextFunction) => {
    if (req.method === "POST") {
        if (req.body.query.includes("mutation")) {
            next()
        }
        else {
            return res.status(400).send({
                error: "Must be sent to GET method"
            })
        }
    } next()
}