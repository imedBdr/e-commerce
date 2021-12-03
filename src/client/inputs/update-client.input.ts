import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class UpdateClientInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
