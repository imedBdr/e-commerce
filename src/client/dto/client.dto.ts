import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ClientDto {
  @Field()
  result: boolean;
  @Field()
  message: string;
}
