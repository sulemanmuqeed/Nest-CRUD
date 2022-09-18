import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeashellsService } from './seashells.service';
import { CreateSeashellDto } from './dto/create-seashell.dto';
import { UpdateSeashellDto } from './dto/update-seashell.dto';

@Controller('seashells')
export class SeashellsController {
  constructor(private readonly seashellsService: SeashellsService) {}

  @Post()
  create(@Body() createSeashellDto: CreateSeashellDto) {
    return this.seashellsService.create(createSeashellDto);
  }

  @Get()
  findAll() {
    return this.seashellsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seashellsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeashellDto: UpdateSeashellDto) {
    return this.seashellsService.update(+id, updateSeashellDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seashellsService.remove(+id);
  }
}
