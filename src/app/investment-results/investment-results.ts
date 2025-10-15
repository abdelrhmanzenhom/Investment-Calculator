import { Component, Input } from '@angular/core';
import {userInterface} from '../input-model'
import { FormsModule } from '@angular/forms';
import { CommonModule,CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-investment-results',
  imports: [FormsModule,CommonModule,CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css'
})
export class InvestmentResults {
 
    constructor(private investment:InvestmentService){}
get results(){
return this.investment.annualdata;
}
}
