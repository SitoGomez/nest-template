import { Module } from '@nestjs/common';
import { FeatureActionUseCase } from '../BC/feature/application/FeatureAction.usecase';
import { FeatureActionController } from '../BC/feature/infrastructure/controller/FeatureAction.controller';
import { BCModule } from '../BC/BC.module';

@Module({
  imports: [BCModule],
  controllers: [FeatureActionController],
  providers: [FeatureActionUseCase],
})
export class AppModule {}
