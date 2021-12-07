import { Field, InputType } from "@nestjs/graphql";

@InputType()
export default class AddCategoryInput {
  @Field()
  name: string;

  @Field()
  description: string;
}
