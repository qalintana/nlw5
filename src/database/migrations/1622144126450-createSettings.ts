import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createSettings1622144126450 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "settings",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          { name: "username", type: "varchar" },
          { name: "chat", type: "boolean", default: true },
          { name: "created_at", type: "timestamps", default: "now()" },
          { name: "updated_at", type: "timestamps", default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("settings");
  }
}
