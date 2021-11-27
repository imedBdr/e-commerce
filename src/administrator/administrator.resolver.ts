import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AdministratorEntity } from "./administrator.entity";
import { AdministratorService } from "./administrator.service";
import { AddAdministratorDto } from "./dto/add-administrator.dto";
import { SetAdminInput } from "./input-types/set-administrator";
import { Administrator } from "./models/administrator.model";

@Resolver(() => Administrator)
export class AdministratorResolver {
  constructor(private readonly administratotService: AdministratorService) {}

  @Query(() => Administrator, { name: "administrator" })
  async getAdmin(@Args("id", { type: () => Int }) id: number) {
    return await this.administratotService.FindAdminById(id);
  }

  @Mutation(() => AddAdministratorDto, { name: "addAdmin" })
  async setAdmin(
    @Args("data") body: SetAdminInput
  ): Promise<AddAdministratorDto> {
    return await this.administratotService.Add(body);
  }
}
