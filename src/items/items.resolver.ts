import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { Item } from './item.entity';
import { AddItemInput } from './dto/add-item.input';

@Resolver(() => Item)
export class ItemsResolver {
  constructor(private itemsService: ItemsService) {}

  @Query(() => [Item])
  async items(): Promise<Item[]> {
    return this.itemsService.getAll();
  }

  @Mutation(() => Item)
  async addItem(
    @Args('addItemInput') addItemInput: AddItemInput,
  ): Promise<Item> {
    return this.itemsService.addItem(addItemInput);
  }

  @Query(() => Item)
  async getItem(
    @Args('name', { type: () => String }) name: string,
  ): Promise<Item> {
    return this.itemsService.findOne(name);
  }
}
