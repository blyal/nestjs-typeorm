import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './models/movie.entity';
import { MovieDto } from './models/movies.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private repo: Repository<Movie>,
  ) {}

  async getAll(): Promise<Movie[]> {
    return await this.repo.find({
      relations: ['directors'],
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
    const newMovie = this.repo.create({
      title: movieDto.title,
      year: movieDto.year,
    });
    await this.repo.save(newMovie);
    return newMovie;
  }
}
