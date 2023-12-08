import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionComponent } from './question-list/question/question.component';
import { QuestionService } from "./shared/services/question.service";
import { TagComponent } from './question-list/question/tag/tag.component';
import { HomeComponent } from './home/home.component';
import { TopicPanelComponent } from './home/topic-panel/topic-panel.component';
import { CompactQuestionComponent } from './shared/components/compact-question/compact-question.component';
import { QuestionDetailComponent } from "./question-detail/question-detail.component";
import { DetailBlockComponent } from './question-detail/detail-block/detail-block.component';
import { UserInfoComponent } from "./question-detail/detail-block/user-info/user-info.component";
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './shared/services/user.service';
import { CompactAnswerComponent } from './profile/compact-answer/compact-answer.component';
import { CompactTagComponent } from './profile/compact-tag/compact-tag.component';
import { ProfileQuestionComponent } from './profile/profile-question/profile-question.component';
import { SliceAndDotsPipe } from './shared/pipes/slice-and-dots.pipe';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { PaginatorComponent } from "./shared/components/paginator/paginator.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthInterceptorService } from './shared/services/auth-interceptor.service';
import { AuthExpiredInterceptorService } from './shared/services/auth-expired-interceptor.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { AdminService } from './shared/services/admin.service';

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
    CompactTagComponent,
    ProfileQuestionComponent,
    SliceAndDotsPipe,
    PaginatorComponent,
    SignUpComponent,
    LoginComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule
    ],
  providers: [
    QuestionService,
    UserService,
    AdminService,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
