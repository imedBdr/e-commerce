import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateItemInput {
  @Field()
  id: number;

  @Field()
  name?: string;

  @Field()
  description?: string;

  @Field()
  categoryId?: number;
}
