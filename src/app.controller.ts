import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Log } from './log.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getLogs(): Log[] {
    return this.appService.getLogs();
  }
  @Post()
  postLog(@Body() log:Log){
    return this.appService.addLog(log);
  }
}
