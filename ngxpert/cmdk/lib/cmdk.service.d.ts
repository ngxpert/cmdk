import * as i0 from "@angular/core";
export declare class CmdkService {
    private _searchSub;
    search$: import("rxjs").Observable<string>;
    private _itemClickedSub;
    itemClicked$: import("rxjs").Observable<string>;
    private _itemValueChangedSub;
    itemValueChanged$: import("rxjs").Observable<{
        oldValue: string;
        newValue: string;
    }>;
    setSearch(value: string): void;
    itemClicked(value: string): void;
    itemValueChanged(oldValue: string, newValue: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmdkService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CmdkService>;
}
