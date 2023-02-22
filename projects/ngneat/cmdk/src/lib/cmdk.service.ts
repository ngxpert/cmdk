import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable()
export class CmdkService {
  private _searchSub = new Subject<string>();
  search$ = this._searchSub.asObservable();
  private _valueSub = new ReplaySubject<string>(1);
  value$ = this._valueSub.asObservable();
  private _activeItemSub = new ReplaySubject<string>(1);
  activeItem$ = this._activeItemSub.asObservable();
  private _activeGroupSub = new ReplaySubject<string>(1);
  activeGroup$ = this._activeGroupSub.asObservable();

  setSearch(value: string) {
    this._searchSub.next(value);
  }

  setValue(value: string) {
    this._valueSub.next(value);
  }

  setActiveItem(itemId: string) {
    this._activeItemSub.next(itemId);
  }

  setActiveGroup(groupId: string) {
    this._activeGroupSub.next(groupId);
  }
}
