import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUsers1622173402031 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          { type: "uuid", isPrimary: true, name: "id" },
          { name: "email", type: "varchar" },
          { name: "created_at", type: "timestamp", default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
