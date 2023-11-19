import { Injectable } from "@angular/core";
import { Question } from "../models/question.model";
import { Topic } from "../models/topic.model";
import {Answer} from "../models/answer-model";
import { UserService } from "./user.service";
@Injectable()
export class QuestionService {

  constructor(private user: UserService) {
  }
  private answers: Answer[] = [
    new Answer(0, 32, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet autem corporis cum deleniti dicta distinctio eaque eos excepturi hic, illum laborum magni modi molestiae nam nesciunt odio officia perspiciatis porro possimus praesentium quo reiciendis rem repellat similique sit sunt suscipit totam, ullam voluptas. Cumque eum rerum tempora! Ab alias corporis in quaerat repellat vel. Autem corporis tenetur velit. Fuga, itaque, voluptates? Aliquid eos fuga fugiat libero perspiciatis? Deserunt eveniet provident temporibus! Accusamus aliquam architecto assumenda autem consequuntur cum dignissimos, dolorem libero molestias mollitia nam natus nisi non numquam omnis porro quia, sequi soluta temporibus velit veniam vitae voluptas voluptate!", this.user.getUser(1), "Apr 4, 2018"),
    new Answer(1, 23, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet autem corporis cum deleniti dicta distinctio eaque eos excepturi hic, illum laborum magni modi molestiae nam nesciunt odio officia perspiciatis porro possimus praesentium quo reiciendis rem repellat similique sit sunt suscipit totam, ullam voluptas. Cumque eum rerum tempora! Ab alias corporis in quaerat repellat vel. Autem corporis tenetur velit. Fuga, itaque, voluptates? Aliquid eos fuga fugiat libero perspiciatis? Deserunt eveniet provident temporibus! Accusamus aliquam architecto assumenda autem consequuntur cum dignissimos, dolorem libero molestias mollitia nam natus nisi non numquam omnis porro quia, sequi soluta temporibus velit veniam vitae voluptas voluptate!",this.user.getUser(1), "Apr 4, 2018"),
    new Answer(2, 15, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet autem corporis cum deleniti dicta distinctio eaque eos excepturi hic, illum laborum magni modi molestiae nam nesciunt odio officia perspiciatis porro possimus praesentium quo reiciendis rem repellat similique sit sunt suscipit totam, ullam voluptas. Cumque eum rerum tempora! Ab alias corporis in quaerat repellat vel. Autem corporis tenetur velit. Fuga, itaque, voluptates? Aliquid eos fuga fugiat libero perspiciatis? Deserunt eveniet provident temporibus! Accusamus aliquam architecto assumenda autem consequuntur cum dignissimos, dolorem libero molestias mollitia nam natus nisi non numquam omnis porro quia, sequi soluta temporibus velit veniam vitae voluptas voluptate!", this.user.getUser(3), "Apr 4, 2018"),
    new Answer(3, 41, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet autem corporis cum deleniti dicta distinctio eaque eos excepturi hic, illum laborum magni modi molestiae nam nesciunt odio officia perspiciatis porro possimus praesentium quo reiciendis rem repellat similique sit sunt suscipit totam, ullam voluptas. Cumque eum rerum tempora! Ab alias corporis in quaerat repellat vel. Autem corporis tenetur velit. Fuga, itaque, voluptates? Aliquid eos fuga fugiat libero perspiciatis? Deserunt eveniet provident temporibus! Accusamus aliquam architecto assumenda autem consequuntur cum dignissimos, dolorem libero molestias mollitia nam natus nisi non numquam omnis porro quia, sequi soluta temporibus velit veniam vitae voluptas voluptate!", this.user.getUser(2), "Apr 4, 2018")
  ]

    private questions: Question[] = [
    new Question(0, "Windows mobile hotspot toggle batch file?", "I want to create a batch file that toggles the mobile hotspot on and off and not disable the setting with regedit. I want to use the in win 11 integrated setting and i fdasd", ["R", "Windows"], 0, 35, "45sec", this.user.getUser(1), new Topic(1, "Cloud Computing", "Cloud infrastructure development, deployment models and management tools.", "#4AB551"), this.answers),
    new Question(1, "Is Linux that bad?", "I want to create a batch file that toggles the mobile hotspot on and off and not disable the setting with regedit. I want to use the in win 11 integrated setting and integrated setting.", ["R", "Windows", "Apple"], 32, 30, "45sec", this.user.getUser(2), new Topic(1, "Cloud Computing", "Cloud infrastructure development, deployment models and management tools.", "#4AB551"), this.answers),
    new Question(2, "Windows best platform ever", "I want to create a batch file that toggles the mobile hotspot on and off and not disable the setting with regedit. I want to use the in win 11 integrated setting and integrated setting.", ["R", "Windows"], 43,32, "45sec", this.user.getUser(1), new Topic(1, "Cloud Computing", "Cloud infrastructure development, deployment models and management tools.", "#4AB551"), this.answers),
    new Question(3, "Why switch to windows?", "I want to create a batch file that toggles the mobile hotspot on and off and not disable the setting with regedit. I want to use the in win 11 integrated setting.", ["R", "Windows"], 0,  42, "45sec", this.user.getUser(3), new Topic(1, "Cloud Computing", "Cloud infrastructure development, deployment models and management tools.", "#4AB551"), this.answers),
    new Question(4, "What is C#?", "I want to create a batch file that toggles the mobile hotspot on and off and not disable the setting with regedit. I want to use the in win 11 integrated setting.", ["R", "Windows"], 1,  46, "45sec", this.user.getUser(1), new Topic(1, "Cloud Computing", "Cloud infrastructure development, deployment models and management tools.", "#4AB551"), this.answers),
    new Question(5, "How to start learning java?", "I want to create a batch file that toggles the mobile hotspot on and off and not disable the setting with regedit. I want to use the in win 11 integrated setting.", ["R", "Windows"], 7,  20, "45sec", this.user.getUser(1), new Topic(1, "Cloud Computing", "Cloud infrastructure development, deployment models and management tools.", "#4AB551"), this.answers),
  ]

  public getQuestions(): Question[] {
    return this.questions.slice();
  }
  public getAnswers(): Answer[]{
    return this.answers.slice();
  }
}
