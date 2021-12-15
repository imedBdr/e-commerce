import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class LocationDto {
  @Field()
  result: boolean;

  @Field()
  message: string;
}
