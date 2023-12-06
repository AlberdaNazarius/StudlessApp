import { Component, Input, OnInit } from '@angular/core';
import { Topic } from '../../shared/models/topic.model';
import { Question } from 'src/app/shared/models/question.model';
import { QuestionService } from "../../shared/services/question.service";

@Component({
  selector: 'app-topic-panel',
  templateUrl: './topic-panel.component.html',
  styleUrls: ['./topic-panel.component.scss']
})
export class TopicPanelComponent implements OnInit {
  @Input() topic: Topic;
  last_question: Question;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe(responseData => {
      this.last_question = responseData[0];
    })
  }
}
