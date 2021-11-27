import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AdministratorEntity } from "./administrator.entity";
import { AddAdministrator } from "./interfaces/add-administrator.interface";
import { CheckAdminExsistance } from "./interfaces/check-exsistance.interface";
import { CheckIfAdminExist } from "./interfaces/checkIfexists.interface";
import { UpdateAdminPassword } from "./interfaces/update-admin-password.interface";
import { UpdateAdmin } from "./interfaces/update-admin.interface";

@Injectable()
export class AdministratorService {
  constructor(
    @InjectRepository(AdministratorEntity)
    private administratorRepository: Repository<AdministratorEntity>
  ) {}

  async Add(body: AddAdministrator) {
    const { result, message } = await this.CheckIfexists({ ...body });
    if (result) {
      await this.administratorRepository.save(body);
      return { message: "Administrator is added", done: true };
    } else return { done: false, message };
  }

  async GetAdmins() {
    const arr = await this.administratorRepository.find();
    return arr?.map((e) => {
      const { password, ...rest } = e;
      return rest;
    });
  }

  async FindAdminById(id: number) {
    const result = await this.administratorRepository.findOne(id);
    if (result) {
      const { password, ...rest } = result;
      return rest;
    }
    return null;
  }

  async CheckIfexists(body: CheckAdminExsistance): Promise<CheckIfAdminExist> {
    const { userName, email } = body;
    const byEmail = await this.administratorRepository.findOne({ email });
    const byUsername = await this.administratorRepository.findOne({ userName });

    if (byEmail && byUsername)
      return { result: false, message: "UserName and Email alredy exist" };
    else if (byUsername)
      return { result: false, message: "UserName alredy exist" };
    else if (byEmail) return { result: false, message: "Email alredy exist" };
    else return { result: true, message: "" };
  }

  async UpdateAdmin(body: UpdateAdmin) {
    const result = await this.administratorRepository.update(body.id, body);
    if (result.affected > 0)
      return { result: true, message: "Administrator details updated" };
    else
      return {
        result: false,
        message: "Administrator details are not updated",
      };
  }

  async UpdateAdminPassword(body: UpdateAdminPassword) {
    const result = await this.administratorRepository.update(body.id, body);
    if (result.affected > 0)
      return { result: true, message: "Administrator details updated" };
    else
      return {
        result: false,
        message: "Administrator details are not updated",
      };
  }

  async Delete(id: number) {
    const result = await this.administratorRepository.delete(id);
    if (result.affected > 0)
      return { result: true, message: "Administrator is deleted" };
    else
      return {
        result: false,
        message: "Administrator is not deleted",
      };
  }
}
