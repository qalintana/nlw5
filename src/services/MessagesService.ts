import { getCustomRepository } from "typeorm";
import { MessageRepository } from "../repositories/MessagesRepository";

interface IMessageCreate {
  admin_id?: string;
  text: string;
  user_id: string;
}

class MessagesService {
  async create({ admin_id, text, user_id }: IMessageCreate) {
    const messagesRepository = getCustomRepository(MessageRepository);

    const messages = messagesRepository.create({
      admin_id,
      text,
      user_id,
    });

    await messagesRepository.save(messages);
    return messages;
  }

  async listByUser(user_id: string) {
    const messagesRepository = getCustomRepository(MessageRepository);

    const list = await messagesRepository.find({ user_id });

    return list;
  }
}

export { MessagesService };
