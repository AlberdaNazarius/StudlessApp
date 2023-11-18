import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionListComponent } from "./question-list/question-list.component";
import { HomeComponent } from './home/home.component';
import {QuestionDetailComponent} from "./question-detail/question-detail.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: "search", component: QuestionListComponent },
  { path: "search/question/:id", component: QuestionDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
