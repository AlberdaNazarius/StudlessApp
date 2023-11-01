import { Component, Input } from '@angular/core';
import { Topic } from '../../shared/models/topic.model';
import { Question } from 'src/app/shared/models/question.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-topic-panel',
  templateUrl: './topic-panel.component.html',
  styleUrls: ['./topic-panel.component.scss']
})
export class TopicPanelComponent {
  @Input() topic: Topic;
  readonly color_variations = ['#1598A3', '#E99330', '#4AB551']
  color: string;

  last_question: Question;

  constructor() {
    this.color = this.color_variations[Math.floor(Math.random() * this.color_variations.length)]
    // Dummy data
    // TODO: Replace with filtered request of data by Topic from QuestionService when implemented
    this.last_question = new Question(1, "Windows mobile hotspot toggle batch file?", "I want to create a batch file that toggles the mobile hotspot on and off and not disable the setting with regedit. I want to use the in win 11 integrated setting and i fdasd", ["R", "Windows"], 0, 32, 32, "45sec", new User(1, "assets/images/logo.png", "fda", 331), this.topic) 
  }
  
}
