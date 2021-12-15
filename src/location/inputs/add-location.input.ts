import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AddLocationInput {
  @Field()
  address: string;

  @Field()
  longitude: string;

  @Field()
  latitude: string;

  @Field()
  clientId: number;
}
