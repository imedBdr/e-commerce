import { Field, InputType } from "@nestjs/graphql";

@InputType()
export default class UpdateCategoryInput {
  @Field()
  id: number;

  @Field()
  name!: string;

  @Field()
  description: string;
}
