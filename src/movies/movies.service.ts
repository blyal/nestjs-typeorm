import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './models/movie.entity';
import { MovieDto } from './models/movies.dto';
import { DirectorsService } from 'src/directors/directors.service';
import { Director } from 'src/directors/models/director.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private repo: Repository<Movie>,
    @InjectRepository(Director)
    private directorsService: DirectorsService,
  ) {}

  async getAll(): Promise<Movie[]> {
    return await this.repo.find({
      // relations: ['directors'],
    });
  }

  async getById(id: string): Promise<Movie> {
    return await this.repo.findOne(id);
  }

  async remove(id: string) {
    await this.repo.delete(id);
  }

  // create(movie: MovieDto): Promise<Movie> {
  //   const newMovie = this.repo.create(movie);
  //   return this.repo.save(newMovie);
  // }

  async create(movieDto: MovieDto): Promise<Movie> {
    const director = await this.directorsService.getById('1');

    const newMovie = this.repo.create({
      title: movieDto.title,
      year: movieDto.year,
      director: director,
    });
    await this.repo.save(newMovie);
    return newMovie;
  }
}
