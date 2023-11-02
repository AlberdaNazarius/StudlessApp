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
    if(windowWidth< 971 && windowWidth>500){
        return answer.substring(0, 80) + '...';
      }
      else return answer.substring(0, 35) + '...';
    
  }
}
