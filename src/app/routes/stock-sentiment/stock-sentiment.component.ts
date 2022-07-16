import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'stock-sentiment',
    templateUrl: './stock-sentiment.component.html',
    styleUrls: ['./stock-sentiment.component.scss'],
})
export class StockSentimentComponent implements OnInit {

    stock!: string;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.stock = this.route.snapshot.params['stock'];
    }
}
