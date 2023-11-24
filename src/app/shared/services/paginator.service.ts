import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PaginatorService {
  private _currentPage: number;

  constructor() {
    this._currentPage = 0;
  }

  public changePage(pageSize: number): { startId: number; endId: number } {
    const startIndex = this._currentPage * pageSize;
    const endIndex = startIndex + pageSize;
    return { startId: startIndex, endId: endIndex };
  }


  public get currentPage(): number {
    return this._currentPage;
  }

  public setCurrentPage(index: number): void {
    this._currentPage = index;
  }
}
