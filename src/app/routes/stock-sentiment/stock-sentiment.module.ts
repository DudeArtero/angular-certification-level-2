import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockSentimentComponent } from './stock-sentiment.component';

const routes: Routes = [
    {
        path: ':stock',
        component: StockSentimentComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes), 
        CommonModule
    ],
    declarations: [StockSentimentComponent],
})
export class StockSentimentModule { }
