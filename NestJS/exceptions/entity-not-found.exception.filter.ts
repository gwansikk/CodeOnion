import { Catch, ExceptionFilter, ArgumentsHost } from "@nestjs/common";
import { EntityNotFoundError } from "typeorm/error/EntityNotFoundError";
import { Response } from "express";

@Catch(EntityNotFoundError)
export class EntityNotFoundExceptionFilter implements ExceptionFilter {
  public catch(exception: EntityNotFoundError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const message = exception.message;

    return response.status(404).json({
      success: false,
      message: message,
      statusCode: 404,
    });
  }
}
