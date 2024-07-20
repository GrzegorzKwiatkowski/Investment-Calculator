import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';


@Component({
  selector: 'app-user-imput',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-imput.component.html',
  styleUrl: './user-imput.component.css'
})

export class UserImputComponent {
  
  initialInvestmentValue = '0';
  annualInvestmentValue = '0';
  expectedReturnValue = '5';
  durationValue = '10';

constructor(private investmentService: InvestmentService) {}

onSubmit() {
  this.investmentService.CalculateInvestmentResults({
    initialInvestment: +this.initialInvestmentValue,
    duration: +this.durationValue,
    expectedReturn: +this.expectedReturnValue,
    annualInvestment: +this.annualInvestmentValue
  });
}
}
