import { getCustomRepository } from "typeorm";
import { Response, Request } from "express";

import { SettingsRepositories } from "../repositories/SettingsRepository";

class SettingsController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body;

    const settingsRepository = getCustomRepository(SettingsRepositories);

    const settings = settingsRepository.create({ chat, username });

    await settingsRepository.save(settings);

    return response.json(settings);
  }
}

export { SettingsController };
