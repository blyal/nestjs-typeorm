import { Director } from 'src/directors/models/director.entity';

export class MovieDto {
  title: string;
  year?: number;
  director?: string;
}
