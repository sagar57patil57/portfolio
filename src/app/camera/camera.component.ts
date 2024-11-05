import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  @ViewChild('videoElement', { static: false }) videoElement!: ElementRef;
  photo: string | null = null;
  stream: MediaStream | null = null;
  isFrontCamera: boolean = true;
  showCapture: boolean = false;
  gallery: string[] = [];
  showGallery: boolean = false;

  ngOnInit(): void {
    // Optionally start the camera on initialization
  }

  // Request permission and start the camera
  requestCameraAccess(): void {
    const constraints = {
      video: {
        facingMode: this.isFrontCamera ? 'user' : 'environment' // Switch between front and back camera
      }
    };

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(constraints)
        .then((stream: MediaStream) => {
          this.showCapture = true;
          this.stream = stream;
          this.videoElement.nativeElement.srcObject = stream;
        })
        .catch((error) => {
          console.error('Camera access was denied:', error);
          alert('Camera access is required to use this feature.');
        });
    } else {
      alert('Your browser does not support camera access.');
    }
  }

  // Start the camera
  startCamera(): void {
    this.requestCameraAccess();
  }

  // Stop the camera
  stopCamera(): void {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null; // Clear the stream
    }
    this.showCapture = false;
  }

  // Capture the photo from the video stream
  capturePhoto(): void {
    const video: HTMLVideoElement = this.videoElement.nativeElement;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext('2d');
    if (context) {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      this.photo = canvas.toDataURL('image/png');
    }
  }

  // Save the photo to local storage
  savePhoto(): void {
    if (this.photo) {
      const existingPictures = localStorage.getItem('capturedPhotos');
      if (existingPictures) {
        const photos = JSON.parse(existingPictures);
        photos.push(this.photo);
        localStorage.setItem('capturedPhotos', JSON.stringify(photos));
      } else {
        localStorage.setItem('capturedPhotos', JSON.stringify([this.photo]));
      }
    }
  }

  // Switch the camera
  switchCamera(): void {
    this.isFrontCamera = !this.isFrontCamera;
    if (this.stream) {
      this.stopCamera(); // Stop the current camera stream before switching
    }
    this.startCamera(); // Start the new camera stream
  }

  // Close the full-screen photo preview
  closePreview(): void {
    this.photo = null;
  }

  openGallery(): void {
    // Open the photo gallery
    const existingPictures = localStorage.getItem('capturedPhotos') || '[]';
    this.gallery = JSON.parse(existingPictures);
    this.showGallery = true;
  } 

  // Cleanup and stop the video stream
  ngOnDestroy(): void {
    this.stopCamera();
  }
}
