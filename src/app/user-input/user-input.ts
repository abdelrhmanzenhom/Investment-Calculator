import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {userInterface} from '../input-model'
@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css'
})
export class UserInput {
  @Output() calculate=new EventEmitter<userInterface>();
initialInvestment=0;
annualInvestment=0;
expectedReturn=0;
duration=0;
onSubmit(){
this.calculate.emit({initialInvestment:+this.initialInvestment,
  annualInvestment:+this.annualInvestment,expectedReturn:+this.expectedReturn,
  duration:+this.duration})
}



}
