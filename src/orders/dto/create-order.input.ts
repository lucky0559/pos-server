import { Field, InputType, Int } from '@nestjs/graphql';

@InputType('OrderInput')
export class OrderInput {
  @Field(() => Int)
  itemId: number;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  price: number;

  @Field(() => Int)
  count: number;
}
