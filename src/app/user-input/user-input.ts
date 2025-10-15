import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {userInterface} from '../input-model'
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css'
})
export class UserInput {

initialInvestment=0;
annualInvestment=0;
expectedReturn=0;
duration=0;
constructor(private investment:InvestmentService){}
onSubmit(){
this.investment.calculateInvestmentResults({
  initialInvestment:this.initialInvestment,
  annualInvestment:this.annualInvestment,
  expectedReturn:this.expectedReturn,
  duration:this.duration,
  
})
  this.initialInvestment=0
  this.expectedReturn=0
  this.annualInvestment=0
  this.duration=0
}



}
