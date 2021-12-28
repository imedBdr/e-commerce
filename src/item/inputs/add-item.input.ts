import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AddItemInput {
  @Field()
  name: string;

  @Field()
  categoryId: number;
}
