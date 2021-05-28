import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";
import { MessageRepository } from "../repositories/MessagesRepository";

interface IMessageCreate {
  admin_id?: string;
  text: string;
  user_id: string;
}

class MessagesService {
  private messagesRepository: Repository<Message>;

  constructor() {
    this.messagesRepository = getCustomRepository(MessageRepository);
  }
  async create({ admin_id, text, user_id }: IMessageCreate) {
    const messages = this.messagesRepository.create({
      admin_id,
      text,
      user_id,
    });

    await this.messagesRepository.save(messages);
    return messages;
  }

  async listByUser(user_id: string) {
    const list = await this.messagesRepository.find({
      where: { user_id },
      relations: ["user"],
    });

    return list;
  }
}

export { MessagesService };
