import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { SuccessInterceptor } from './common/interceptors/success.interceptor';

@ApiTags('system')
@Controller()
@UseInterceptors(SuccessInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
