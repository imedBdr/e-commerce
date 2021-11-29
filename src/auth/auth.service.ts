import { Injectable } from "@nestjs/common";
import { ClientService } from "../client/client.service";
import { AdministratorService } from "../administrator/administrator.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private clientService: ClientService,
    private administratorService: AdministratorService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const userClient = await this.clientService.findForValidation(username);
    const userAdmin = await this.administratorService.findForValidation(
      username
    );
    if (userClient && (await bcrypt.compare(password, userClient.password))) {
      const { password, ...temp } = userClient;
      const result = { role: ["client"], ...temp };
      return result;
    } else if (
      userAdmin &&
      (await bcrypt.compare(password, userAdmin.password))
    ) {
      const { password, ...temp } = userAdmin;
      const result = { role: ["admin", "client"], ...temp };
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.userName, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
