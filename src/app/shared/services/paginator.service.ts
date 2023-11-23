import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PaginatorService {
  private _currentPage: number;
  private _pageSize: number;
  private _data: any[];

  constructor() {
    this._currentPage = 0;
  }

  public initializePageData<T>(data: T[], pageSize: number): T[] {
    this._pageSize = pageSize;
    this._data = data;
    const startIndex = this._currentPage * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  }

  public changePage<T>(): T[] {
    const startIndex = this._currentPage * this._pageSize;
    const endIndex = startIndex + this._pageSize;
    return this._data.slice(startIndex, endIndex);
  }

  get currentPage(): number {
    return this._currentPage;
  }

  public setCurrentPage(index: number): void {
    this._currentPage = index;
  }
}
