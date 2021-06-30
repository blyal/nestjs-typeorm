import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Director } from '../../directors/models/director.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;

  @Column()
  year: number;

  // @Column()
  // director: string;

  //first try
  // @OneToOne(() => Director, (director) => director.name)
  // director: string;

  @OneToOne(() => Director, (director) => director.movie)
  @JoinColumn()
  director: Director;
}
