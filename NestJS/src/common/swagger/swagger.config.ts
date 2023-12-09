import { DocumentBuilder } from '@nestjs/swagger';
import packageJson from '../../../package.json';

export const SwaggerConfig = new DocumentBuilder()
  .setTitle(packageJson.name)
  .setVersion(packageJson.version)
  .setDescription(packageJson.description)
  .addTag('System')
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      in: 'header',
    },
    'access-token',
  )
  .build();
