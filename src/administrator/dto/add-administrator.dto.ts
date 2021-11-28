import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AdministratorDto {
  @Field()
  result: boolean;
  @Field()
  message: string;
}
