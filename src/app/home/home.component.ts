import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../shared/services/question.service';
import { Question } from '../shared/models/question.model';
import { Topic } from '../shared/models/topic.model';
import { TopicService } from '../shared/services/topic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topics: Topic[];
  last_questions: Question[];

  constructor(private topicService: TopicService,
              private questionService: QuestionService) { }

  ngOnInit(): void {
    // Setting page background color
    document.body.style.backgroundColor = '#f1f2f4';
    // Set properties values
    this.topics = this.topicService.getTopics();
    this.questionService.getQuestions().subscribe(responseData => {
      this.last_questions = responseData;
    })
  }
}
