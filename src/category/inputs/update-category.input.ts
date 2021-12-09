import { Field, InputType } from "@nestjs/graphql";

@InputType()
export default class UpdateCategoryInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  name!: string;

  @Field({ nullable: true })
  description: string;
}
