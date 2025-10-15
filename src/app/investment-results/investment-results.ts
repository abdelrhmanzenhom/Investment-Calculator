import { Component, Input } from '@angular/core';
import {userInterface} from '../input-model'
import { FormsModule } from '@angular/forms';
import { CommonModule,CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-investment-results',
  imports: [FormsModule,CommonModule,CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css'
})
export class InvestmentResults {
  @Input({required:true})results?:{
      year:number,
      interest: number,
      valueEndOfYear: number,
      annualInvestment: number,
      totalInterest: number,
      totalAmountInvested: number,
    }[];
    

}
