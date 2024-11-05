import { Component } from '@angular/core';

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.css']
})
export class FileExplorerComponent {
  folders = [
    { 
      name: 'Documents', 
      content: [
        { name: 'Proj.docx', type: 'file' }, 
        { name: 'CV.pdf', type: 'file' }
      ] 
    },
    { 
      name: 'Desktop', 
      content: [
        { name: 'MyFolder', type: 'folder' }, 
        { name: 'Photo.png', type: 'file' }
      ] 
    },
    { 
      name: 'Downloads', 
      content: [
        { name: 'Setup.exe', type: 'file' }, 
        { name: 'Music.mp3', type: 'file' }
      ] 
    }
  ];

  selectedFolder = this.folders[0];
  history: any[] = [];

  // Method to select folder and add to history
  selectFolder(folder: any) {
    this.history.push(this.selectedFolder); // Add current folder to history
    this.selectedFolder = folder;
  }

  // Check if there is any folder in history to go back to
  canGoBack(): boolean {
    return this.history.length > 0;
  }

  // Go back to the previous folder
  goBack() {
    if (this.canGoBack()) {
      this.selectedFolder = this.history.pop(); // Get the last folder from history
    }
  }
}
