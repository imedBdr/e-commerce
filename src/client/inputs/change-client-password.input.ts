import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class ChangeClientPasswordInput {
  @Field()
  password: string;
}
