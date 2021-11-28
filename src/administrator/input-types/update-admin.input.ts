import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class UpdateAdminInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

}
