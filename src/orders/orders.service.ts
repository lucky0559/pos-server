import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { OrderInput } from './dto/create-order.input';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private ordersRepository: Repository<Order>,
  ) {}

  async createOrder(orderInput: OrderInput[]) {
    try {
      return await this.ordersRepository.save({
        items: orderInput,
      });
    } catch (e) {
      throw new BadRequestException('Error processing order');
    }
  }
}
