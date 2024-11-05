import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  display: string = ''; // The current input displayed
  result: number | null = null; // The result of the calculation

  // Append a character to the display
  appendToDisplay(value: string) {
    this.display += value;
  }

  // Clear the display
  clearDisplay() {
    this.display = '';
    this.result = null; // Clear the result
  }

  // Calculate the result
  calculate() {
    try {
      // Using eval to compute the result from the display
      this.result = eval(this.display);
    } catch (error) {
      this.result = null; // Handle error, result remains null
      alert('Invalid calculation'); // Optional: alert for invalid expressions
    }
  }
}
