import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input-model';


@Component({
  selector: 'app-user-imput',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-imput.component.html',
  styleUrl: './user-imput.component.css'
})


export class UserImputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  initialInvestmentValue = '0';
  annualInvestmentValue = '0';
  expectedReturnValue = '5';
  durationValue = '10';
onSubmit() {
this.calculate.emit({
  initialInvestment: +this.annualInvestmentValue,
  duration: +this.durationValue,
  expectedReturn: +this.expectedReturnValue,
  annualInvestment: +this.annualInvestmentValue
})
}
}
