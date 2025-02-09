import {
  NextFunction,
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';
import { CustomError } from '../errors/custom-error';

export const errorHandler = (
  err: Error,
  req: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction
): void => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).send({ errors: err.serializeErrors() });
  } else {
    res.status(400).send({
      errors: [
        {
          message: 'Something went wrong!',
        },
      ],
    });
  }
};
