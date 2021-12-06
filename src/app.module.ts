import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import Entities from "./entities";
import Modules from "./modules";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "chawkidak",
      database: "e-commerce",
      entities: [...Entities],
      synchronize: true,
      migrations: ["migration/*.ts"],
      cli: {
        migrationsDir: "migration",
      },
    }),
    GraphQLModule.forRoot({
      include: [...Modules],
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
      debug: false,
      playground: true,
    }),
    ...Modules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
