import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class CmdkService {
    constructor() {
        this._searchSub = new Subject();
        this.search$ = this._searchSub.asObservable();
        this._itemClickedSub = new Subject();
        this.itemClicked$ = this._itemClickedSub.asObservable();
        this._itemValueChangedSub = new Subject();
        this.itemValueChanged$ = this._itemValueChangedSub.asObservable();
    }
    setSearch(value) {
        this._searchSub.next(value);
    }
    itemClicked(value) {
        this._itemClickedSub.next(value);
    }
    itemValueChanged(oldValue, newValue) {
        this._itemValueChangedSub.next({ oldValue, newValue });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: CmdkService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: CmdkService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: CmdkService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21kay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4cGVydC9jbWRrL3NyYy9saWIvY21kay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHL0IsTUFBTSxPQUFPLFdBQVc7SUFEeEI7UUFFVSxlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUMzQyxZQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFDaEQsaUJBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLHlCQUFvQixHQUFHLElBQUksT0FBTyxFQUd0QyxDQUFDO1FBQ0wsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxDQUFDO0tBYTlEO0lBWEMsU0FBUyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxRQUFnQixFQUFFLFFBQWdCO1FBQ2pELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDOzhHQXJCVSxXQUFXO2tIQUFYLFdBQVc7OzJGQUFYLFdBQVc7a0JBRHZCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDbWRrU2VydmljZSB7XG4gIHByaXZhdGUgX3NlYXJjaFN1YiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgc2VhcmNoJCA9IHRoaXMuX3NlYXJjaFN1Yi5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBfaXRlbUNsaWNrZWRTdWIgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gIGl0ZW1DbGlja2VkJCA9IHRoaXMuX2l0ZW1DbGlja2VkU3ViLmFzT2JzZXJ2YWJsZSgpO1xuICBwcml2YXRlIF9pdGVtVmFsdWVDaGFuZ2VkU3ViID0gbmV3IFN1YmplY3Q8e1xuICAgIG9sZFZhbHVlOiBzdHJpbmc7XG4gICAgbmV3VmFsdWU6IHN0cmluZztcbiAgfT4oKTtcbiAgaXRlbVZhbHVlQ2hhbmdlZCQgPSB0aGlzLl9pdGVtVmFsdWVDaGFuZ2VkU3ViLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHNldFNlYXJjaCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VhcmNoU3ViLm5leHQodmFsdWUpO1xuICB9XG5cbiAgaXRlbUNsaWNrZWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2l0ZW1DbGlja2VkU3ViLm5leHQodmFsdWUpO1xuICB9XG5cbiAgaXRlbVZhbHVlQ2hhbmdlZChvbGRWYWx1ZTogc3RyaW5nLCBuZXdWYWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faXRlbVZhbHVlQ2hhbmdlZFN1Yi5uZXh0KHsgb2xkVmFsdWUsIG5ld1ZhbHVlIH0pO1xuICB9XG59XG4iXX0=