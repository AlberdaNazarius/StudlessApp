import {Component, OnInit} from '@angular/core';
import {QuestionService} from "../shared/services/question.service";
import {Question} from "../shared/models/question.model";
import {Answer} from "../shared/models/answer.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit{
  question: Question;
  answers: Answer[];

  constructor(private questionService: QuestionService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.questionService.getQuestion(params['id']).subscribe(responseData => {
          this.question = responseData
          this.answers = this.question.answers;
        });
      }
    );
  }
}
