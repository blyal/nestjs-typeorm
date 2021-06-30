import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DirectorsService } from './directors.service';
import { DirectorDto } from './models/director.dto';
import { Director } from './models/director.entity';

@Controller('directors')
export class DirectorsController {
  constructor(private service: DirectorsService) {}

  @Get()
  getAll(): any {
    return this.service.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Director> {
    return this.service.getById(id);
  }

  @Post()
  create(@Body() director: DirectorDto): Promise<Director> {
    return this.service.create(director);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.service.remove(id);
  }
}
