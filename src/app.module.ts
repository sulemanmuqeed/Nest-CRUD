import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeashellsModule } from './seashells/seashells.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seashell } from './seashells/entities/seashell.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'seashells',
      password: 'seashells',
      database: 'seashells',
      entities: [Seashell],
      synchronize: true,
    }),
    SeashellsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
