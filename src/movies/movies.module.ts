import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DirectorsModule } from 'src/directors/director.module';
import { Movie } from './models/movie.entity';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie]),
    forwardRef(() => DirectorsModule),
  ],
  providers: [MoviesService],
  controllers: [MoviesController],
  exports: [TypeOrmModule, MoviesService],
})
export class MoviesModule {}
