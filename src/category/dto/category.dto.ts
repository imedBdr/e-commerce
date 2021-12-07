import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CategoryDto {
  @Field()
  result: boolean;

  @Field()
  message: string;
}
