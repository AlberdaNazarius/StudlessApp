import { Answer } from 'src/app/shared/models/answer.model';
import { Question } from 'src/app/shared/models/question.model';

export class SortData{
    constructor(private questions: Question[],
        private answers: Answer[]){}
    sortQuestionsByScore() :void {
        this.questions.sort((a, b) => b.votes - a.votes);
      }

      sortQuestionsByViews(): void{
        this.questions.sort((a, b) => b.views - a.views);
      }
      sortAnswersByScore() :void {
        this.answers.sort((a, b) => b.votes - a.votes);
      }
      sortQuestionsByActivity() {
      }
       convertStringToDate(dateString: string): Date {
        const date = new Date(dateString);

        if (isNaN(date.getTime())) {
          throw new Error('Invalid date string');
        }

        return date;
      }
       sortAnswersByDate() {
      //TODO fix
         // this.answers.sort((a, b) => {
          // const dateA = this.convertStringToDate(a.askedDate);
          // const dateB = this.convertStringToDate(b.askedDate);

          // return dateA.getTime() - dateB.getTime();
        // });
      }
}
