import {Component, Input, OnInit} from '@angular/core';
import { Topic } from '../../shared/models/topic.model';
import { Question } from 'src/app/shared/models/question.model';
import {QuestionService} from "../../shared/services/question.service";

@Component({
  selector: 'app-topic-panel',
  templateUrl: './topic-panel.component.html',
  styleUrls: ['./topic-panel.component.scss']
})
export class TopicPanelComponent implements OnInit {
  @Input() topic: Topic;
  readonly color_variations = ['#1598A3', '#E99330', '#4AB551']
  color: string;

  last_question: Question;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.color = this.color_variations[Math.floor(Math.random() * this.color_variations.length)]
    this.last_question = this.questionService.getQuestions()[0];
  }

}
