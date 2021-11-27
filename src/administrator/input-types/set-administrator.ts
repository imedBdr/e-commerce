import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class SetAdminInput {
  @Field()
  userName: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  password: string;

  @Field()
  email: string;
}
