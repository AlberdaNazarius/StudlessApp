import { Component, Input } from '@angular/core';
import { Answer } from 'src/app/shared/models/answer-model';
import { Question } from 'src/app/shared/models/question.model';
import {QuestionService} from "src/app/shared/services/question.service";


interface TextNumberPair {
    number: number;
    text: String;
    date: String;
  }
@Component({
  selector: 'app-profile-reputation',
  templateUrl: './profile-reputation.component.html',
  styleUrls: ['./profile-reputation.component.scss']
})
export class ProfileReputationComponent {
  @Input() answer: Answer;
  @Input() question: Question;
  pairs: TextNumberPair[];

  constructor(private questionService: QuestionService) { }

  
  getDescriptionSnippet(answer: string): string {
    const windowWidth = window.innerWidth;
    if(windowWidth< 971 && windowWidth>600){
        return answer.substring(0, 63-((971-windowWidth)/9)) + '...';
      }
      else if (windowWidth<=600)
      {
        return answer.substring(0, 60-((600-windowWidth)/6)) + '...';
      }
      else return answer.substring(0, 40) + '...';
    
  }
 
  
}
