import { Injectable } from '@nestjs/common';

@Injectable()
export class FeatureActionUseCase {
  getHello(): string {
    return 'Hello World!';
  }
}
