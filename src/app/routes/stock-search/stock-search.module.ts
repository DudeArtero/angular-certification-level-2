import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StockSearchComponent } from './stock-search.component';

const routes: Routes = [
    {
        path: '',
        component: StockSearchComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes), 
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [StockSearchComponent],
})
export class StockSearchModule { }
