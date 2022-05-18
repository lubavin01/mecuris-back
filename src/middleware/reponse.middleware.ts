import { Request, Response } from 'express';
import { IResponseData } from '../interfaces';

export default function ResponseMiddleware(req: Request, res: Response) {
    const { mainResult } = res.locals;

    if (!mainResult) {
        return res.status(501).json({});
    }

    if (mainResult.err) {
        return res.status(mainResult.status).json({ message: mainResult.message });
    }

    type respData = typeof mainResult.data;

    const responseData: IResponseData<respData> = {};
    if (mainResult.data) {
        responseData.data = mainResult.data;
    }

    if (mainResult.message) {
        responseData.message = mainResult.message;
    }

    return res.status(mainResult.status).json(responseData);
}
