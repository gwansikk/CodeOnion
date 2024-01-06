import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger();

  use(req: Request, res: Response, next: NextFunction) {
    if (process.env.MODE === "development") {
      const start = Date.now();

      res.on("finish", () => {
        const time = Date.now() - start;

        this.logger.debug(`${req.method} ${res.statusCode} +${time}ms`, req.originalUrl);
      });
    }

    next();
  }
}
