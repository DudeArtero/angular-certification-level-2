import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class StockStorageService {

    readonly #STOCK_KEY: string = 'stocks';
    #stocks$ = new BehaviorSubject<string[]>(this.#getStocks());

    get stocks$(): Observable<string[]> {
        return this.#stocks$.asObservable();
    }

    /**
     * Adds a new stock to the current stock list stored in localStorage, only if the stock isn't in the list.
     * @param stock Stock symbol
     */
    addStock(stock: string): void {
        let stocks: string[] = this.#getStocks();

        if (!stocks.includes(stock)) {
            stocks.push(stock);
            localStorage.setItem(this.#STOCK_KEY, JSON.stringify(stocks));
    
            this.#stocks$.next(stocks);
        }
    }

    /**
     * Removes the provided stock from the list stored in localStorage.
     * @param stock Stock symbol
     */
    removeStock(stock: string): void { 
        const stocks: string[] = this.#getStocks();

        let filteredStocks: string[] = stocks.filter(storedStock => storedStock !== stock);
        localStorage.setItem(this.#STOCK_KEY, JSON.stringify(filteredStocks));

        this.#stocks$.next(filteredStocks);
    }

    /**
     * Returns an array of string from localStorage with the stocks. Empty array if there isn't any.
     * @returns String[] with the stocks.
     */
    #getStocks(): string[] { 
        return (<string[]>JSON.parse(localStorage.getItem(this.#STOCK_KEY) ?? '[]')) ?? []
    }
}
