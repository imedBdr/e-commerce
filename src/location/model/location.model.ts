import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class LocationModel {
  @Field()
  id: number;

  @Field({ nullable: true })
  address: string;

  @Field()
  longitude: string;

  @Field()
  latitude: string;
}
