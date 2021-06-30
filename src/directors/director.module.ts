import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Director } from './models/director.entity';
import { Movie } from '../movies/models/movie.entity';
import { DirectorsController } from './directors.controller';
import { DirectorsService } from './directors.service';
import { MoviesService } from 'src/movies/movies.service';

@Module({
  imports: [TypeOrmModule.forFeature([Director, Movie])],
  providers: [DirectorsService, MoviesService],
  controllers: [DirectorsController],
})
export class DirectorsModule {}
