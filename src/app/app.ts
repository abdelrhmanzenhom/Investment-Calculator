import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponnent } from "./header-componnent/header-componnent";
import { UserInput } from "./user-input/user-input";
import {userInterface} from "./input-model"
import { InvestmentResults } from "./investment-results/investment-results";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponnent, UserInput, InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('InvestmentCalculator');
annualdata?:{
      year:number,
      interest: number,
      valueEndOfYear: number,
      annualInvestment: number,
      totalInterest: number,
      totalAmountInvested: number,
    }[]
  calculateInvestmentResults(data:userInterface) {
  const  {initialInvestment,duration,expectedReturn,annualInvestment}=data;
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  }

  this.annualdata= annualData;
}
}
