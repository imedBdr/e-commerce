import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AdministratorModule } from "./administrator/administrator.module";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { AdministratorEntity } from "./administrator/administrator.entity";
import { ClientModule } from "./client/client.module";
import { CategoryModule } from "./category/category.module";
import { ItemModule } from "./item/item.module";
import { ItemDetailsModule } from "./item-details/item-details.module";
import { CartModule } from "./cart/cart.module";
import { CartDetailsModule } from "./cart-details/cart-details.module";
import { BillModule } from "./bill/bill.module";
import { BillDetailsModule } from "./bill-details/bill-details.module";
import { LocationModule } from './location/location.module';
import { AuthModule } from './auth/auth.module';

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
    ClientModule,
    CategoryModule,
    ItemModule,
    ItemDetailsModule,
    CartModule,
    CartDetailsModule,
    BillModule,
    BillDetailsModule,
    LocationModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
