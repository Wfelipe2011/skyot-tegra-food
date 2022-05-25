import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTableProducts1653468639182 implements MigrationInterface {
    name = 'AlterTableProducts1653468639182'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "temporary_product" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "price" varchar NOT NULL, "description" varchar, "image" varchar)`);
        await queryRunner.query(`INSERT INTO "temporary_product"("id", "title", "price", "description", "image") SELECT "id", "title", "price", "description", "image" FROM "product"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`ALTER TABLE "temporary_product" RENAME TO "product"`);
        await queryRunner.query(`CREATE TABLE "temporary_product" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "price" varchar NOT NULL, "description" varchar, "image" varchar, "category" varchar)`);
        await queryRunner.query(`INSERT INTO "temporary_product"("id", "title", "price", "description", "image") SELECT "id", "title", "price", "description", "image" FROM "product"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`ALTER TABLE "temporary_product" RENAME TO "product"`);
        await queryRunner.query(`CREATE TABLE "temporary_product" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "price" integer NOT NULL, "description" varchar, "image" varchar, "category" varchar)`);
        await queryRunner.query(`INSERT INTO "temporary_product"("id", "title", "price", "description", "image", "category") SELECT "id", "title", "price", "description", "image", "category" FROM "product"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`ALTER TABLE "temporary_product" RENAME TO "product"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" RENAME TO "temporary_product"`);
        await queryRunner.query(`CREATE TABLE "product" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "price" varchar NOT NULL, "description" varchar, "image" varchar, "category" varchar)`);
        await queryRunner.query(`INSERT INTO "product"("id", "title", "price", "description", "image", "category") SELECT "id", "title", "price", "description", "image", "category" FROM "temporary_product"`);
        await queryRunner.query(`DROP TABLE "temporary_product"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME TO "temporary_product"`);
        await queryRunner.query(`CREATE TABLE "product" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "price" varchar NOT NULL, "description" varchar, "image" varchar)`);
        await queryRunner.query(`INSERT INTO "product"("id", "title", "price", "description", "image") SELECT "id", "title", "price", "description", "image" FROM "temporary_product"`);
        await queryRunner.query(`DROP TABLE "temporary_product"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME TO "temporary_product"`);
        await queryRunner.query(`CREATE TABLE "product" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "price" varchar NOT NULL, "description" varchar, "image" varchar, "categoryId" integer)`);
        await queryRunner.query(`INSERT INTO "product"("id", "title", "price", "description", "image") SELECT "id", "title", "price", "description", "image" FROM "temporary_product"`);
        await queryRunner.query(`DROP TABLE "temporary_product"`);
        await queryRunner.query(`DROP TABLE "client"`);
    }

}
