import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AddItemInput {
  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Int)
  price: number;

  @Field(() => String)
  category: string;
}
