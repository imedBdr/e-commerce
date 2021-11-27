import { Field, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AddAdministratorDto {
  @Field()
  done: boolean;
  @Field()
  message: string;
}
