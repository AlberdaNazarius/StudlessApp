import { Component, Input } from '@angular/core';
import { Answer } from 'src/app/shared/models/answer-model';
import { Question } from 'src/app/shared/models/question.model';
import {QuestionService} from "src/app/shared/services/question.service";


@Component({
  selector: 'app-compact-answer',
  templateUrl: './compact-answer.component.html',
  styleUrls: ['./compact-answer.component.scss']
})
export class CompactAnswerComponent {
  @Input() answer: Answer;
  @Input( )question: Question[];

  constructor(private questionService: QuestionService) {
    this.question = questionService.getQuestions();
   }

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
  findAnswerByQuestion(id:number): number{
    for(const quest of this.question){
      for(const answ of quest.answers){
      if(answ.id == id)return quest.id;
    }
    }
    return 5;
  }

  
}
