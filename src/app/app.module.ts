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
import {QuestionDetailComponent} from "./question-detail/question-detail.component";
import { DetailBlockComponent } from './question-detail/detail-block/detail-block.component';
import {UserInfoComponent} from "./question-detail/detail-block/user-info/user-info.component";
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './shared/services/user.service';
import { CompactAnswerComponent } from './profile/compact-answer/compact-answer.component';
import { CompactTagComponent } from './profile/compact-tag/compact-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionListComponent,
    QuestionComponent,
    TagComponent,
    HomeComponent,
    TopicPanelComponent,
    CompactQuestionComponent,
    QuestionDetailComponent,
    UserInfoComponent,
    DetailBlockComponent,
    ProfileComponent,
    CompactAnswerComponent,
    CompactTagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [QuestionService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
