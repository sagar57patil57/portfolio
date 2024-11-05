import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private audio: HTMLAudioElement;
  isAudioEnabled: string = 'none';
  audioFiles: { [key: string]: string };

  constructor() {
    this.audioFiles = {
      option1: 'none',
      option2: '/assets/audio/click1.mp3',
      option3: '/assets/audio/click2.wav'
    };
    this.audio = new Audio('/assets/audio/click2.wav'); // Path to your audio file
  }

  playAudio(): void {
    this.isAudioEnabled = this.getAudioStatus() || 'none';
    if (this.audio && this.isAudioEnabled !== 'none') {
      this.audio.currentTime = 0; // Reset audio to start
      this.audio.play();
    }
  }

  setAudioStatus(status: string): void {
    this.isAudioEnabled = status;
    window.localStorage.setItem('audioStatus', status);
    if (status !== 'none') {
      this.audio = new Audio(this.audioFiles[status]);
    }
  }

  getAudioStatus(): string|null {  
    return window.localStorage.getItem('audioStatus');
  }
}
