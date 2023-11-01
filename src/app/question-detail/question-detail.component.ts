import {Component, OnInit} from '@angular/core';
import {QuestionService} from "../shared/services/question.service";
import {Question} from "../shared/models/question.model";
import {Answer} from "../shared/models/answer-model";

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit{
  question: Question;
  answers: Answer[];

  constructor(private questionService: QuestionService) {
  }

  ngOnInit(): void {
    //TODO change this
    this.question = this.questionService.getQuestions()[0];
    this.answers = this.question.answers;
  }
}
