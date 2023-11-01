import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionComponent } from './question-list/question/question.component';
import {QuestionService} from "./shared/services/question.service";
import { TagComponent } from './question-list/question/tag/tag.component';
import { HomeComponent } from './home/home.component';
import { TopicPanelComponent } from './home/topic-panel/topic-panel.component';
import { CompactQuestionComponent } from './shared/components/compact-question/compact-question.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionListComponent,
    QuestionComponent,
    TagComponent,
    HomeComponent,
    TopicPanelComponent,
    CompactQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
