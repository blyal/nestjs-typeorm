import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Director } from './models/director.entity';
import { DirectorDto } from './models/director.dto';
import { Movie } from 'src/movies/models/movie.entity';
import { MoviesService } from 'src/movies/movies.service';

@Injectable()
export class DirectorsService {
  constructor(
    @InjectRepository(Director)
    private repo: Repository<Director>,
    private moviesService: MoviesService,
  ) {}

  async getAll(): Promise<Director[]> {
    return await this.repo.find({
      // relations: ['movies'],
    });
  }

  async getById(id: string): Promise<Director> {
    return await this.repo.findOne(id);
  }

  async remove(id: string) {
    await this.repo.delete(id);
  }

  //removed async await when added create step, instead of directly saving
  async create(directorDto: DirectorDto): Promise<Director> {
    // const director: Director = directorDto;

    // const newMovie: Movie = await this.moviesService.create({
    //   title: directorDto.movie,
    // });
    // await this.repo.save(newMovie);

    const newDirector = this.repo.create({
      name: directorDto.name,
      birthYear: directorDto.birthYear,
      bestFilm: directorDto.bestFilm,
      movie: directorDto.movie,
    });
    await this.repo.save(newDirector);
    return newDirector;
  }
}
