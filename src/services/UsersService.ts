import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UsersRepository";

class UsersService {
  async create(email: string) {
    const userRepository = getCustomRepository(UserRepository);

    const userExists = await userRepository.findOne({ email });

    if (userExists) {
      return userExists;
    }

    const user = userRepository.create({ email });
    await userRepository.save(user);

    return user;
  }
}

export { UsersService };
