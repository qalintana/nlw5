import { Repository } from "typeorm";
import { Setting } from "../entities/Setting";

class SettingsRepositories extends Repository<Setting> {}

export { SettingsRepositories };
