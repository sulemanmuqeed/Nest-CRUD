import { Module } from '@nestjs/common';
import { SeashellsService } from './seashells.service';
import { SeashellsController } from './seashells.controller';

@Module({
  controllers: [SeashellsController],
  providers: [SeashellsService]
})
export class SeashellsModule {}
