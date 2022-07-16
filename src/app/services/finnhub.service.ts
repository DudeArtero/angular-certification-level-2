import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class FinnhubService {
    
    readonly #FINNHUB_CLIENT;

    constructor() {
        const finnhub = require('finnhub');
        const api_key = finnhub.ApiClient.instance.authentications['api_key'];
        api_key.apiKey = 'cb98ed2ad3i0v9a26s1g';
        this.#FINNHUB_CLIENT = new finnhub.DefaultApi();
    }

    searchSymbol(symbol: string) {
        this.#FINNHUB_CLIENT.symbolSearch(symbol, (error: any, data: any, response: any) => {
            console.log(data);
        });
    }
}
