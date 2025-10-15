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

 
}
