import { getCustomRepository } from "typeorm";
import { SettingsRepositories } from "../repositories/SettingsRepository";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  async create({ chat, username }: ISettingsCreate) {
    const settingsRepository = getCustomRepository(SettingsRepositories);

    const userAlreadyExists = await settingsRepository.findOne({ username });

    if (userAlreadyExists) {
      throw new Error("User Already exists");
    }

    const settings = settingsRepository.create({ chat, username });

    await settingsRepository.save(settings);
    return settings;
  }
}

export { SettingsService };
