import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryColumn, Column } from "typeorm";

@ObjectType()
@Entity()
export class Country {
  @PrimaryColumn()
  @Field()
  code: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  emoji: string;
}
