import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AdministratorModule } from "./administrator/administrator.module";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { AdministratorEntity } from "./administrator/administrator.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "chawkidak",
      database: "e-commerce",
      entities: [AdministratorEntity],
      synchronize: false,
      migrations: ["migration/*.ts"],
      cli: {
        migrationsDir: "migration",
      },
    }),
    GraphQLModule.forRoot({
      include: [AdministratorModule],
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
      debug: false,
      playground: true,
    }),
    AdministratorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
