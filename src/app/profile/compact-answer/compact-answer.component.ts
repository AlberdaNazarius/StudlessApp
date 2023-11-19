import { Component, Input } from '@angular/core';
import { Answer } from 'src/app/shared/models/answer-model';

@Component({
  selector: 'app-compact-answer',
  templateUrl: './compact-answer.component.html',
  styleUrls: ['./compact-answer.component.scss']
})
export class CompactAnswerComponent {
  @Input() answer: Answer;

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
