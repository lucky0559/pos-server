import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Item {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  name: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  description?: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  count?: number;

  @Column()
  @Field(() => String)
  category: string;
}
