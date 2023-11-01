import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  // TODO this values should be changed when person is logged or not
  isLogged: boolean = true;
  nickName: string = "UserNickname";
}
