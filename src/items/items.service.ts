import { Injectable } from '@nestjs/common';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
  async getAll(): Promise<Item[]> {
    const item = new Item();
    item.id = 1;
    item.name = 'Chicken Burger';
    item.descrition = 'Delicious';
    item.price = 134;
    item.category = 'burger';

    return [item];
  }
}
