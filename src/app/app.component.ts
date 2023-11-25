import {Component, HostListener, OnInit} from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  delayInMilliseconds: number = 0;
  
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.autoLogin();
    setTimeout(this.addPaddingTopBasedOnHeaderSize, this.delayInMilliseconds);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    this.addPaddingTopBasedOnHeaderSize();
  }

  private addPaddingTopBasedOnHeaderSize(): void {
    const header = document.getElementById("main-header");
    if (header != null) {
      const headerHeight: number = header.getBoundingClientRect().height;
      document.body.style.paddingTop = `${headerHeight}px`
    }
  }
}
