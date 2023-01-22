import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CmdkService {
  private _searchSub = new Subject<string | undefined>();
  search$ = this._searchSub.asObservable();
  private _isEmptySub = new Subject<boolean>();
  isEmpty$ = this._isEmptySub.asObservable();

  setSearch(value: string | undefined) {
    this._searchSub.next(value);
  }

  setIsEmpty(value: boolean) {
    this._isEmptySub.next(value);
  }
}
