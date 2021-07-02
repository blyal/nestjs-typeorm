import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DirectorsModule } from 'src/directors/director.module';
import { Director } from 'src/directors/models/director.entity';
import { Movie } from './models/movie.entity';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  imports: [DirectorsModule, TypeOrmModule.forFeature([Movie])],
  providers: [MoviesService],
  controllers: [MoviesController],
})
export class MoviesModule {}
