import { Request, Response } from "express";

export function ResponseMiddleware (req: Request, res: Response) {
    const { mainResult } = res.locals;

    if (mainResult.err) {
        return res.status(mainResult.status).json({ message: mainResult.message })
    }

    const responseData: { data?: any, message?: string } = {};
    if (mainResult.data) {
        responseData.data = mainResult.data;
    }

    if (mainResult.message) {
        responseData.message = mainResult.message;
    }

    return res.status(mainResult.status).json(responseData);
}
