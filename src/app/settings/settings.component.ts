import { Component } from '@angular/core';
import { AudioService } from '../services/audio.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  brightness: number = 100;
  iconSize: string = 'medium';
  customCursor = 'default';
  backgroundOptions = [
    { name: 'Blue Gradient', start: '#1e3a8a', end: '#3b82f6' },
    { name: 'Purple Gradient', start: '#6d28d9', end: '#a855f7' },
    { name: 'Green Gradient', start: '#10b981', end: '#34d399' },
    { name: 'Sunset', start: '#f97316', end: '#f43f5e' },
    { name: 'Ocean Breeze', start: '#06b6d4', end: '#3b82f6' },
    { name: 'Warm Flame', start: '#ff7e5f', end: '#feb47b' },
    { name: 'Pink Dream', start: '#ec4899', end: '#f43f5e' },
    { name: 'Deep Space', start: '#2d3748', end: '#4a5568' },
    { name: 'Candy Floss', start: '#f9a8d4', end: '#f43f5e' },
    { name: 'Vivid Cyan', start: '#06b6d4', end: '#0ea5e9' }
  ];

  // Flag to track if the default background is used
  isDefaultBackground = true;
  selectedAudioOption: string|null = 'none';

  isChecked: boolean = false;
  constructor(private audioService: AudioService) {
    
    this.selectedAudioOption = audioService.getAudioStatus()
    
  }

  // onCheckboxChange() {
  //   if (this.isChecked) {
  //     this.audioService.setAudioStatus(true);
  //   } else {
  //     this.audioService.setAudioStatus(false);
  //   }
  // }

  selectAudioOption(option: string): void {
    this.selectedAudioOption = option;
    this.audioService.setAudioStatus(option);
  }

  setBackgroundColor(option: any) {
    this.isDefaultBackground = false;
    document.documentElement.style.setProperty('--bg-color-start', option.start);
    document.documentElement.style.setProperty('--bg-color-end', option.end);
    document.body.classList.remove('bg-default');
    document.body.classList.add('bg-custom-gradient');
  }

  // Method to reset to the default image background
  resetToDefault() {
    this.isDefaultBackground = true;
    document.body.classList.remove('bg-custom-gradient');
    document.body.classList.add('bg-default');
  }

  adjustBrightness() {
    const opacityValue = this.brightness / 100;
    document.body.style.opacity = opacityValue.toString();
  }

  setCustomCursor(cursor: string) {
    this.customCursor = cursor;
    document.body.style.cursor = this.customCursor; // Update the cursor style on the body
  }

  resetSettings() {
    this.customCursor = 'default';
    document.body.style.cursor = this.customCursor;
    this.resetToDefault();
  }
}
