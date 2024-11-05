import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {
  currentMessage = 'Starting OS...';
  messages = ['Starting OS...', 'Almost there...', 'Loading complete!'];
  currentMessageIndex = 0;

  ngOnInit(): void {
    // Change the message every second
    this.updateMessage();
  }

  updateMessage(): void {
    const messageInterval = setInterval(() => {
      this.currentMessageIndex += 1;

      if (this.currentMessageIndex < this.messages.length) {
        this.currentMessage = this.messages[this.currentMessageIndex];
      }

      // Stop changing text when the last message is shown
      if (this.currentMessageIndex >= this.messages.length - 1) {
        clearInterval(messageInterval);
      }
    }, 1000);
  }
}
