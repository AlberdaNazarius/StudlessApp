import {Component, Input, OnInit} from '@angular/core';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';
import { Question } from 'src/app/shared/models/question.model';
import { Answer } from 'src/app/shared/models/answer-model';
import {QuestionService} from "src/app/shared/services/question.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  profile : User;
  questions: Question[];
  answers: Answer[];

  constructor(private userService: UserService,private questionService: QuestionService) { }

  ngOnInit(): void {
    this.profile = this.userService.getUser();
    this.questions = this.questionService.getQuestions();
    this.answers = this.questionService.getAnswers();
  }
  sortQuestionsByScore() :void {
    this.questions.sort((a, b) => b.votes - a.votes);
  }
  
  sortQuestionsByViews(): void{
    this.questions.sort((a, b) => b.views - a.views);
  }
  sortAnswersByScore() :void {
    this.answers.sort((a, b) => b.votes - a.votes);
  }
  sortQuestionsByActivity() {
    // Реалізуйте сортування за активністю
  }
}
