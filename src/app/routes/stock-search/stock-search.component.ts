import { Component } from '@angular/core';
import {
    AbstractControl,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { StockStorageService } from 'src/app/services/stock-storage.service';

@Component({
    selector: 'stock-search',
    templateUrl: './stock-search.component.html',
    styleUrls: ['./stock-search.component.scss'],
})
export class StockSearchComponent {
    formGroupStock: FormGroup = new FormGroup({
        stockInput: new FormControl('', [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(5),
        ]),
    });

    get stockInput(): AbstractControl | null {
        return this.formGroupStock.get('stockInput');
    }

    stocks$: Observable<string[]>;

    constructor(private stockStorageService: StockStorageService) { 
        this.stocks$ = this.stockStorageService.stocks$;
    }

    onSubmitStock(): void {
        // Marks all the controls as touched so we can see the validation errors
        this.formGroupStock.markAllAsTouched();

        if (this.formGroupStock.valid) {
            const stockValue: string = this.formGroupStock.value?.['stockInput'];
            this.stockStorageService.addStock(stockValue);
        }
    }
}
