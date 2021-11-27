import { Field, Int, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Administrator{

    @Field(type=>Int)
    id:number;

    @Field()
    useName:string;

    @Field()
    fistName:string;

    @Field()
    lastName:string;

    @Field()
    password:string;

    @Field()
    email:string;
}