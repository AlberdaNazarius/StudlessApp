import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input() totalItems: number;
  @Input() pageSize: number;
  @Input() pageIndex: number;
  @Output() pageChanged = new EventEmitter<PageEvent>();
  @ViewChild(MatPaginator) paginator: MatPaginator;


  onPageChange(event: PageEvent): void {
    this.pageChanged.emit(event);
  }
}
