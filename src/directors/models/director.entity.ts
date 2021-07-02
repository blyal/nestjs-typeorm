import { Movie } from 'src/movies/models/movie.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Director {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  birthYear: number;

  @Column({ nullable: true })
  bestFilm: string;

  @Column({ nullable: true })
  movie: string;

  // first try
  // @OneToOne(() => Movie, (movie) => movie.director)
  // @JoinColumn()
  // movie: Movie;

  // @OneToOne(() => Movie, (movie) => movie.director)
  // movie: Movie;
}
