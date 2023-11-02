import {Component, Input, OnInit} from '@angular/core';
import { User } from '../shared/models/user.model';
import { ProfileService } from '../shared/services/user.service';
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

  constructor(private profileService: ProfileService,private questionService: QuestionService) { }

  ngOnInit(): void {
    this.profile = this.profileService.getProfile();
    this.questions = this.questionService.getQuestions();
    this.answers = this.questionService.getAnswers();
  }
}
