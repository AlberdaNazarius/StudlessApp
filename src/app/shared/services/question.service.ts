import { Injectable } from "@angular/core";
import { Question } from "../models/question.model";
import {Answer} from "../models/answer.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
@Injectable()
export class QuestionService {

  private answers: Answer[] = []
  private questions: Question[] = []

  constructor(private http: HttpClient) {
  }

  public getQuestions() {
    return this.http.get<Question[]>(`http://localhost:5074/api/question/questions`)
  }

  public getQuestion(id: number): Observable<Question> {
    return this.http.get<any>(`http://localhost:5074/api/question/${id}`)
      .pipe(map(question => {
        for (let answer of question.answers) {
          answer.votes = answer['votesCount'];
        }
        return question;
      }))
  }

  public getAnswers(): Answer[]{
    return this.answers.slice();
  }
}
