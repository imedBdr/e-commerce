import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AdministratorService } from "./administrator.service";
import { AddAdministratorDto } from "./dto/add-administrator.dto";
import { AddAdministrator } from "./interfaces/add-administrator.interface";
import { Administrator } from "./models/administrator.model";



@Resolver(of=>Administrator)
export class AdministratorResolver{

    constructor(private readonly administratotService :AdministratorService){}

    @Query(returns=>Administrator,{name:'administrator'})
    async getAdmin(@Args('id',{type:()=>Int})id:number){
        return await this.administratotService.FindAdminById(id)                                                                                                                                                           
    }

    @Mutation(returns=>AddAdministratorDto,{name:'administrator'})
    async setAdmin(@Args('body') body:AddAdministrator){
        return await this.administratotService.Add(body)
    }

}