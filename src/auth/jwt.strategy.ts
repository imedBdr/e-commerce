import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "Change it to stong secret",
    });
  }

  async validate(payload: any) {
    // can check more for the truth of the informations
    return { id: payload.sub, username: payload.username, role: payload.role };
  }
}
