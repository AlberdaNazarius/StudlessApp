import { Injectable } from "@angular/core";
import { Question } from "../models/question.model";
import { User } from "../models/user.model";
import { Topic } from "../models/topic.model";

@Injectable()
export class QuestionService {
  private questions: Question[] = [
    new Question(1, "Windows mobile hotspot toggle batch file?", "I want to create a batch file that toggles the mobile hotspot on and off and not disable the setting with regedit. I want to use the in win 11 integrated setting and i fdasd", ["R", "Windows"], 0, 32, 32, "45sec", new User(1, "assets/images/logo.png", "fda", 331), new Topic(1, "Cloud Computing", "Cloud infrastructure development, deployment models and management tools.")),
    new Question(1, "Windows mobile hotspot toggle batch file?", "I want to create a batch file that toggles the mobile hotspot on and off and not disable the setting with regedit. I want to use the in win 11 integrated setting and i", ["R", "Windows", "Apple"], 0, 32, 32, "45sec", new User(1, "assets/images/logo.png", "faa", 54), new Topic(1, "Cloud Computing", "Cloud infrastructure development, deployment models and management tools.")),
    new Question(1, "Windows mobile hotspot toggle batch file?", "I want to create a batch file that toggles the mobile hotspot on and off and not disable the setting with regedit. I want to use the in win 11 integrated setting and i", ["R", "Windows"], 43, 32, 32, "45sec", new User(1, "assets/images/logo.png", "fda", 3), new Topic(1, "Cloud Computing", "Cloud infrastructure development, deployment models and management tools.")),
    new Question(1, "Windows mobile hotspot toggle batch file?", "I want to create a batch file that toggles the mobile hotspot on and off and not disable the setting with regedit. I want to use the in win 11 integrated setting and i", ["R", "Windows"], 0, 32, 32, "45sec", new User(1, "assets/images/logo.png", "Hfas", 5535), new Topic(1, "Cloud Computing", "Cloud infrastructure development, deployment models and management tools.")),
    new Question(1, "Windows mobile hotspot toggle batch file?", "I want to create a batch file that toggles the mobile hotspot on and off and not disable the setting with regedit. I want to use the in win 11 integrated setting and i", ["R", "Windows"], 1, 32, 32, "45sec", new User(1, "assets/images/logo.png", "Hfas", 3), new Topic(1, "Cloud Computing", "Cloud infrastructure development, deployment models and management tools.")),
    new Question(1, "Windows mobile hotspot toggle batch file?", "I want to create a batch file that toggles the mobile hotspot on and off and not disable the setting with regedit. I want to use the in win 11 integrated setting and i", ["R", "Windows"], 7, 32, 32, "45sec", new User(1, "assets/images/logo.png", "Hfas", 31), new Topic(1, "Cloud Computing", "Cloud infrastructure development, deployment models and management tools.")),
  ]

  public getQuestions(): Question[] {
    return this.questions.slice();
  }
}
