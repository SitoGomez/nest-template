import { Module } from '@nestjs/common';
import { FeatureActionUseCase } from './feature/application/FeatureAction.usecase';
import { FeatureActionController } from './feature/infrastructure/controller/FeatureAction.controller';

@Module({
  imports: [],
  controllers: [FeatureActionController],
  providers: [FeatureActionUseCase],
})
export class BCModule {}
