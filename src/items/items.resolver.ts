import { Query, Resolver } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { Item } from './item.entity';

@Resolver(() => Item)
export class ItemsResolver {
  constructor(private itemsService: ItemsService) {}

  @Query(() => [Item])
  items(): Promise<Item[]> {
    return this.itemsService.getAll();
  }
}
