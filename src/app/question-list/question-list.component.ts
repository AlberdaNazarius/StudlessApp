import {Component, OnInit} from '@angular/core';
import {Question} from "../shared/models/question.model";
import {QuestionService} from "../shared/services/question.service";
import {PageEvent} from "@angular/material/paginator";
import {PaginatorService} from "../shared/services/paginator.service";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit{
  pageSize: number = 3;

  questions: Question[];
  currentPageData: Question[];
  currentPageIndex: number;

  constructor(private questionService: QuestionService,
              private paginatorService: PaginatorService) {
  }

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();

    const indexes = this.paginatorService.changePage(this.pageSize);
    this.currentPageData = this.questions.slice(indexes.startId, indexes.endId);
    this.currentPageIndex = this.paginatorService.currentPage;
  }

  onPageChanged(event: PageEvent) {
    this.paginatorService.setCurrentPage(event.pageIndex);
    this.currentPageIndex = this.paginatorService.currentPage;
    const indexes = this.paginatorService.changePage(this.pageSize);
    this.currentPageData = this.questions.slice(indexes.startId, indexes.endId);
  }
}
