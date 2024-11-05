import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-code-compiler',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, OnDestroy {
  userCode: string = '';
  error: string | null = null;
  worker: Worker | null = null;
  logs: string[] = [];
  showOutput: boolean = true;
  
  @ViewChild('codeEditor') codeEditor!: ElementRef;

  ngOnInit(): void {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(new URL('./code-worker.worker', import.meta.url));
      this.worker.onmessage = ({ data }) => {
        if (data.success) {
          this.logs = data.logs || [];
          this.error = null; // Reset error
        } else {
          this.error = data.error;
          this.logs = []; // Reset logs
        }
      };
    }
  }

  // Adjust textarea height based on content
  adjustTextareaHeight(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    target.style.height = 'auto'; // Reset height first
    target.style.height = target.scrollHeight + 'px'; // Adjust to fit content
  }

  // Executes sanitized user code via Web Worker
  executeCode(): void {
    const sanitizedCode = this.sanitizeCode(this.userCode);
    if (this.worker) {
      this.worker.postMessage(sanitizedCode);
    }
  }

  // Simple sanitization to prevent dangerous code
  private sanitizeCode(code: string): string {
    const forbiddenPatterns = [
      /document\.cookie/g, /window\./g, /eval\(/g, /Function\(/g, 
      /fetch\(/g, /XMLHttpRequest/g, /localStorage/g, /sessionStorage/g
    ];

    forbiddenPatterns.forEach(pattern => {
      code = code.replace(pattern, '/* Forbidden */');
    });

    return code;
  }

  // Generate line numbers based on the input code
  getLineNumbers(code: string): number[] {
    const lines = code.split('\n').length;
    return Array.from({ length: lines }, (_, i) => i + 1);
  }

  ngOnDestroy(): void {
    if (this.worker) {
      this.worker.terminate();
    }
  }
}
