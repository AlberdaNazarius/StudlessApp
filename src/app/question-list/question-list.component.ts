import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../shared/models/question.model";
import {QuestionService} from "../shared/services/question.service";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit{
  protected questions: Question[];

  constructor(private questionService: QuestionService) {
  }

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();
  }
}
