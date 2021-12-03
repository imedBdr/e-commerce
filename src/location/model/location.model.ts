import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class LocationModel {
  @Field()
  id: number;

  @Field()
  address: string;

  @Field()
  longitude: string;

  @Field()
  latitude: string;
}
