import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CmdkService {
  private _searchSub = new Subject<string>();
  search$ = this._searchSub.asObservable();
  private _itemClickedSub = new Subject<string>();
  itemClicked$ = this._itemClickedSub.asObservable();
  private _itemValueChangedSub = new Subject<{
    oldValue: string;
    newValue: string;
  }>();
  itemValueChanged$ = this._itemValueChangedSub.asObservable();

  setSearch(value: string) {
    this._searchSub.next(value);
  }

  itemClicked(value: string) {
    this._itemClickedSub.next(value);
  }

  itemValueChanged(oldValue: string, newValue: string) {
    this._itemValueChangedSub.next({ oldValue, newValue });
  }
}
