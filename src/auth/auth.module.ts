import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";

@Module({
  imports: [
    JwtModule.register({
      secret: "Change it to stong secret",
      signOptions: { expiresIn: "10m" },
    }),
  ],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
