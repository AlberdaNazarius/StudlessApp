import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionListComponent } from "./question-list/question-list.component";
import { HomeComponent } from './home/home.component';
import {QuestionDetailComponent} from "./question-detail/question-detail.component";
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: "search", component: QuestionListComponent },
  { path: "question", component: QuestionDetailComponent},
  { path: "profile", component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
