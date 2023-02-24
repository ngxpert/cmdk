import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CmdkService {
  private _searchSub = new Subject<string>();
  search$ = this._searchSub.asObservable();
  private _itemClickedSub = new Subject<string>();
  itemClicked$ = this._itemClickedSub.asObservable();

  setSearch(value: string) {
    this._searchSub.next(value);
  }

  itemClicked(value: string) {
    this._itemClickedSub.next(value);
  }
}
