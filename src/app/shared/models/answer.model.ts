import {User} from "./user.model";

export class Answer {
  constructor(public id: number,
              public votes: number,
              public description: string,
              public author: User,
              public answeredDate: Date) {
  }
}
