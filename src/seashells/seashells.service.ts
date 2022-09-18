import { Injectable } from '@nestjs/common';
import { CreateSeashellDto } from './dto/create-seashell.dto';
import { UpdateSeashellDto } from './dto/update-seashell.dto';

@Injectable()
export class SeashellsService {
  create(createSeashellDto: CreateSeashellDto) {
    return 'This action adds a new seashell';
  }

  findAll() {
    return `This action returns all seashells`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seashell`;
  }

  update(id: number, updateSeashellDto: UpdateSeashellDto) {
    return `This action updates a #${id} seashell`;
  }

  remove(id: number) {
    return `This action removes a #${id} seashell`;
  }
}
