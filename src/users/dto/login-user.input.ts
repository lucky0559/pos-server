import { Field, InputType } from '@nestjs/graphql';

@InputType('LoginInput')
export class LoginInput {
  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;
}
