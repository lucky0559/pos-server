import { Injectable } from '@nestjs/common';
import { Item } from './item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddItemInput } from './dto/add-item.input';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private itemsRepository: Repository<Item>,
  ) {}

  async getAll(): Promise<Item[]> {
    return this.itemsRepository.find();
  }

  async addItem(addItemInput: AddItemInput): Promise<Item> {
    const newItem = this.itemsRepository.create(addItemInput);
    return this.itemsRepository.save(newItem);
  }

  async findOne(name: string): Promise<Item> {
    return this.itemsRepository.findOneOrFail({ where: { name } });
  }
}
