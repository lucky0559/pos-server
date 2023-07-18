import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Item {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  descrition?: string;

  @Field(() => Int)
  price: number;

  @Field(() => String)
  category: string;
}
