import { User } from "./user.model";
import { Topic } from "./topic.model";

export class Question {
  constructor(public id: number,
              public questionName: string,
              public description: string,
              public tags: string[],
              public votes: number,
              public answers: number,
              public views: number,
              public askedDate: string,
              public author: User,
              public topic: Topic
  ) {}
}
