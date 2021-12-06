import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class AddClientInput {
  @Field()
  userName: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  phone: string;

  @Field()
  password: string;

  @Field()
  email: string;
}
