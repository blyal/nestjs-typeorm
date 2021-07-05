import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Director } from './models/director.entity';
import { DirectorsController } from './directors.controller';
import { DirectorsService } from './directors.service';
import { MoviesModule } from 'src/movies/movies.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Director]),
    forwardRef(() => MoviesModule),
  ],
  providers: [DirectorsService],
  controllers: [DirectorsController],
  exports: [TypeOrmModule, DirectorsService],
})
export class DirectorsModule {}
