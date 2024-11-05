import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommandsService } from '../services/commands.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent {
  @ViewChild('inputElement') inputElement!: ElementRef; // Reference to the input element
  terminalInput = '';
  commandHistory: { command: string, output: string, isHtml: boolean }[] = [];
  historyIndex = -1;  // For navigating through command history
  storedInputBeforeHistory = ''; // Temporarily store current input when navigating history
  @ViewChild('terminalBody') terminalBody!: ElementRef;

  constructor(private _commandService: CommandsService) {}

  // Process the entered command
  processCommand() {
    if (this.terminalInput.trim() !== '') {
      // Execute the command and get the result
      const result = this.runCommand(this.terminalInput);

      // Push both command and output (if any) into the history array
      this.commandHistory.push({
        command: `sagar.patil ~ % ${this.terminalInput}`,
        output: result ? result.output : '',
        isHtml: result ? result.isHtml : false
      });

      // Clear input after processing command
      this.terminalInput = '';
      this.historyIndex = -1; // Reset history navigation index
      this.storedInputBeforeHistory = ''; // Clear temporary input store
    }
    setTimeout(() => {
      this.scrollToBottom();
    } , 100);
  }

  // Execute the command and return result
  runCommand(command: string): { output: string, isHtml: boolean } | null {
    const result = this._commandService.exec(command);
    if (result === null) {
      return { output: `bash: ${command}: command not found`, isHtml: false };
    }
    if (command.toLowerCase() === 'clear') {
      this.commandHistory = []; // Clear history for "clear" command
      return null;
    }
    return { output: result.commandOutput, isHtml: result.isHtml };
  }

  // Handle key down events, including history navigation
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.processCommand();
    } else if (event.key === 'ArrowUp') {
      this.showPreviousCommand();
    } else if (event.key === 'ArrowDown') {
      this.showNextCommand();
    }
  }

  // Navigate to the previous command in history
  showPreviousCommand() {
    if (this.historyIndex === -1) {
      // Temporarily store the current input before navigating history
      this.storedInputBeforeHistory = this.terminalInput;
    }

    // Move backward in the command history, but not beyond the earliest command
    if (this.historyIndex < this.commandHistory.length - 1) {
      this.historyIndex++;
      const previousCommand = this.commandHistory[this.commandHistory.length - 1 - this.historyIndex].command;
      this.terminalInput = previousCommand.split(' % ')[1] || '';  // Extract the command part
    }
  }

  // Navigate to the next command in history
  showNextCommand() {
    // Move forward in the command history
    if (this.historyIndex > 0) {
      this.historyIndex--;
      const nextCommand = this.commandHistory[this.commandHistory.length - 1 - this.historyIndex].command;
      this.terminalInput = nextCommand.split(' % ')[1] || '';
    } else if (this.historyIndex === 0) {
      // Restore the input that was entered before navigating history
      this.historyIndex = -1;
      this.terminalInput = this.storedInputBeforeHistory;
      this.storedInputBeforeHistory = ''; // Clear the temp store
    }
  }

  // Focus the input element when the terminal is clicked
  focusInput() {
    this.inputElement.nativeElement.focus();
  }

  scrollToBottom() {
    try {
      this.terminalBody.nativeElement.scrollTop = this.terminalBody.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Error scrolling to the bottom:', err);
    }
  }

  ngAfterViewChecked() {
    // this.scrollToBottom(); // Ensure scroll always happens after each view update
  }
}
