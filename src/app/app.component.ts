import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    const header = document.getElementById("main-header");
    if (header != null) {
      document.body.style.paddingTop = `${header.getBoundingClientRect().height}px`
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    const header = document.getElementById("main-header");
    if (header != null) {
      document.body.style.paddingTop = `${header.getBoundingClientRect().height}px`
    }
  }
}
