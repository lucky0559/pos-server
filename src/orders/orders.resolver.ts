import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { Item } from '../items/item.entity';
import { OrderInput } from './dto/create-order.input';

@Resolver()
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Mutation(() => Item)
  createOrder(
    @Args({ name: 'orderInput', type: () => [OrderInput] })
    orderInput: OrderInput[],
  ) {
    return this.ordersService.createOrder(orderInput);
  }
}
