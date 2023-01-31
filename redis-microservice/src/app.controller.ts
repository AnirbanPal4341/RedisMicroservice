import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('sum')
  async summation(data: number[]): Promise<number> {
    console.log(`Adding : ${data.toString()}`);
    return this.appService.sum(data);
  }
}
