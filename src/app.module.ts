import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeashellsModule } from './seashells/seashells.module';

@Module({
  imports: [SeashellsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
