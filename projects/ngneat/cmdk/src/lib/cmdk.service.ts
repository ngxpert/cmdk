import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CmdkService {
  private _searchSub = new Subject<string | undefined>();
  search$ = this._searchSub.asObservable();

  setSearch(value: string | undefined) {
    this._searchSub.next(value);
  }
}
