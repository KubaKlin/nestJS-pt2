import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class UniqueIdService {
  generate(): string {
    return randomUUID();
  }
}
