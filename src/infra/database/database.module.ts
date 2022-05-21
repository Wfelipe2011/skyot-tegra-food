import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import databaseProviders from './config/database.providers';
import { customRepositories, repositories } from './repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseProviders as TypeOrmModuleOptions),
    TypeOrmModule.forFeature(repositories),
  ],
  providers: [...repositories],
  exports: [TypeOrmModule.forFeature(repositories), ...customRepositories],
})
export class DatabaseModule {}
