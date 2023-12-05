import {Component, Input} from '@angular/core';
import {User} from "../../shared/models/user.model";

@Component({
  selector: 'app-detail-block',
  templateUrl: './detail-block.component.html',
  styleUrls: ['./detail-block.component.scss']
})
export class DetailBlockComponent {
  @Input() description: string;
  @Input() votes: number;
  @Input() author: User;
  @Input() askedDate: Date;
  @Input() isQuestion: boolean;

  increaseVotes(): void {
    this.votes++;
  }

  decreaseVotes(): void {
    this.votes--;
  }
}
