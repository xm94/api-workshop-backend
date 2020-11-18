import { Injectable } from '@nestjs/common';
import { Log } from './log.interface';

@Injectable()
export class AppService {

  private logs: Log[] = []
  getLogs(): any[] {
    return this.logs;
  }
  addLog(log:Log){
    this.logs.push(log);
    return log;
  }

}
