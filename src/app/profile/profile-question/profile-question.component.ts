import { Component, Input } from '@angular/core';
import { Question } from 'src/app/shared/models/question.model';

@Component({
  selector: 'app-profile-question',
  templateUrl: './profile-question.component.html',
  styleUrls: ['./profile-question.component.scss']
})
export class ProfileQuestionComponent {
  @Input() question: Question;
}
