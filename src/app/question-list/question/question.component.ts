import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../shared/models/question.model";
import {User} from "../../shared/models/user.model";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit{
  @Input("questionInfo")
  question: Question;
  author: User;

  ngOnInit(): void {
    this.author = this.question.author;
  }
}
