import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';

import { ProductsModule } from './module/products/products.module';

@Module({
  imports: [DatabaseModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
