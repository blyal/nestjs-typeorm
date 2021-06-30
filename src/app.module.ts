import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movies/models/movie.entity';
import { MoviesModule } from './movies/movies.module';
import { Director } from './directors/models/director.entity';
import { DirectorsModule } from './directors/director.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './sqlite/movies.db',
      entities: [Movie, Director],
      synchronize: true,
    }),
    MoviesModule,
    DirectorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
