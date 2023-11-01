import { Component, Input } from '@angular/core';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-compact-question',
  templateUrl: './compact-question.component.html',
  styleUrls: ['./compact-question.component.scss']
})
export class CompactQuestionComponent {
  @Input() question: Question;
}
