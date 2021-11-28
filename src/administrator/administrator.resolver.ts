import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AdministratorService } from "./administrator.service";
import { AdministratorDto } from "./dto/add-administrator.dto";
import { SetAdminInput } from "./input-types/set-administrator";
import { UpdateAdminInput } from "./input-types/update-admin.input";
import { Administrator } from "./models/administrator.model";

@Resolver(() => Administrator)
export class AdministratorResolver {
  constructor(private readonly administratotService: AdministratorService) {}

  @Query(() => Administrator, { name: "administrator" })
  async getAdmin(@Args("id", { type: () => Int }) id: number) {
    return await this.administratotService.FindAdminById(id);
  }

  @Query(() => [Administrator], { name: "admins" })
  async getAdmins() {
    return await this.administratotService.GetAdmins();
  }

  @Mutation(() => AdministratorDto, { name: "addAdmin" })
  async addAdmin(
    @Args("data") body: SetAdminInput
  ): Promise<AdministratorDto> {
    return await this.administratotService.Add(body);
  }


  @Mutation(() => AdministratorDto, { name: "updateAdmin" })
  async updateAdmin(
    @Args("data") body: UpdateAdminInput
  ): Promise<AdministratorDto> {
    const obj = { id:1, ...body }
    return await this.administratotService.UpdateAdmin(obj);
  }

  @Mutation(() => AdministratorDto, { name: "deleteAdmin" })
  async deleteAdmin(
    @Args("data"  ) id: number
  ): Promise<AdministratorDto> {
    return await this.administratotService.Delete(id);
  }
}
