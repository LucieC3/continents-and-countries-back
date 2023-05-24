import { Field, InputType } from 'type-graphql';
import { IsNotEmpty, Length, IsAlpha } from 'class-validator';

@InputType()
export class CountryInput {
  @Field()
  @IsNotEmpty() 
  @IsAlpha()
  code: string;

  @Field()
  @IsNotEmpty()
  @Length(1, 255)
  name: string;

  @Field()
  @IsNotEmpty()
  emoji: string;
}

