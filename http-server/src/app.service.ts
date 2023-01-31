import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('MATH_SERVICE') private client: ClientProxy) {}
  getSummation(): Observable<number> {
    const data: number[] = [1, 2, 3, 4, 5, 6];
    return this.client.send('sum', data);
  }
}
