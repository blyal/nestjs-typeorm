import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Movie } from './models/movie.entity';
import { MovieDto } from './models/movies.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private service: MoviesService) {}

  @Get()
  getAll(): any {
    return this.service.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Movie> {
    return this.service.getById(id);
  }

  @Post()
  create(@Body() movie: MovieDto): Promise<Movie> {
    return this.service.create(movie);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.service.remove(id);
  }
}
