import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateLocationInput {
  @Field()
  id: number;

  @Field()
  longitude: string;

  @Field()
  latitude: string;

  @Field()
  address: string;
}
