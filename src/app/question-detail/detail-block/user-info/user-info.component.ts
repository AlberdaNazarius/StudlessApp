import {Component, Input} from '@angular/core';
import {User} from "../../../shared/models/user.model";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  @Input() user: User;
  @Input() askedDate: string;
}
