import { Controller, Get } from '@nestjs/common';
import { FeatureActionUseCase } from '../../application/FeatureAction.usecase';

@Controller()
export class FeatureActionController {
  public constructor(private readonly appService: FeatureActionUseCase) {}

  @Get()
  public getHello(): string {
    return this.appService.getHello();
  }
}
