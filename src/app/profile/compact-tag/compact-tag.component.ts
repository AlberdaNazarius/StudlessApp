import { Component, Input } from '@angular/core';
import { Question } from 'src/app/shared/models/question.model';
import {QuestionService} from "src/app/shared/services/question.service";
interface TextNumberPair {
  text: String;
  number1: number;
  number2: number;
}
@Component({
  selector: 'app-compact-tag',
  templateUrl:'./compact-tag.component.html',
  styleUrls: ['./compact-tag.component.scss']
})

export class CompactTagComponent {
  @Input() question: Question[];
  pairs: TextNumberPair[];

  constructor(private questionService: QuestionService) { }

  getTagsData(): void{
    this.pairs = [];
    this.question = this.questionService.getQuestions();
    // TODO fix this
    // this.question.forEach((q: Question) => {
    //   q.tags.forEach((eachTag: String) =>{
    //     const searchText = eachTag;
    //     const foundPair = this.pairs.find((pair: TextNumberPair) => {
    //     return pair.text === searchText;});
    //
    //   if (foundPair) {
    //     foundPair.number1 += q.votes;
    //     foundPair.number2 ++;
    //   } else {
    //     this.pairs.push({text: eachTag, number1:q.votes, number2: 1})
    //   }
    //   })
    // });
  }


}
