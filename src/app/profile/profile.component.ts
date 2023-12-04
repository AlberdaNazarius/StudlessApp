import {Component, Input, OnInit} from '@angular/core';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';
import { Question } from 'src/app/shared/models/question.model';
import { Answer } from 'src/app/shared/models/answer.model';
import {QuestionService} from "src/app/shared/services/question.service";
import {ActivatedRoute, Params} from "@angular/router";
import { SortData } from '../shared/utils/sort-utils';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  profile : User;
  questions: Question[];
  answers: Answer[];
  sort: SortData;

  constructor(private userService: UserService,
              private questionService: QuestionService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.profile = this.userService.getUser(params['id']);
        this.questions = this.questionService.getQuestions();
        this.answers = this.questionService.getAnswers();
        this.sort = new SortData(this.questions,this.answers);
      }
    );
  }
}
