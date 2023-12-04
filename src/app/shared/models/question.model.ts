import { User } from "./user.model";
import { Topic } from "./topic.model";
import {Answer} from "./answer.model";
import {Tag} from "./tag.model";

export class Question {
  constructor(public id: number,
              public questionName: string,
              public description: string,
              public tags: Tag[],
              public votes: number,
              public views: number,
              public askedDate: string,
              public author: User,
              public topic: Topic,
              public answers: Answer[]
  ) {}
}
