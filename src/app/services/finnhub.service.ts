import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Stock, StockData } from '../models/stock.model';

@Injectable({
    providedIn: 'root',
})
export class FinnhubService {

    readonly #FINNHUB_CLIENT;

    searchSymbol$: Subject<Stock[]> = new Subject<Stock[]>();
    quote$: Subject<StockData> = new Subject<StockData>();

    constructor() {
        const finnhub = require('finnhub');
        const api_key = finnhub.ApiClient.instance.authentications['api_key'];
        api_key.apiKey = 'bu4f8kn48v6uehqi3cqg'; //'cb98ed2ad3i0v9a26s1g';
        this.#FINNHUB_CLIENT = new finnhub.DefaultApi();
    }

    searchSymbol(filter: string): void {
        this.#FINNHUB_CLIENT.symbolSearch(filter, (error: any, data: any, response: any) => {
            const stocks: Stock[] = data.result as Stock[];
            this.searchSymbol$.next(stocks);
        });
    }

    quote(symbol: string, callback: (error: any, data: any, response: any) => void): void {
        this.#FINNHUB_CLIENT.quote(symbol, callback);
    }
}
