import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() modalId!: string;
  @Output() onToggleFullScreen = new EventEmitter();
  @Output() onCloseModal = new EventEmitter();
  isOpen = false;
  isFullScreen = false;
  isMobile: boolean;

  // Position variables
  top = '50px'; // default top position
  left = '50px'; // default left position
  offsetX = 0; // offset for drag
  offsetY = 0; // offset for drag

  constructor(public modalService: ModalService, private utilService: UtilService) {
    this.isMobile = utilService.isMobile()
    if (this.isMobile) {
      this.isFullScreen = true;
      this.top = '0';
      this.left = '0';
    }
  }

  openModal() {
    this.isOpen = true;
    this.top = '50px'; // default top position
    this.left = '50px'; // default left position
    if (this.isMobile) {
      this.top = '0';
      this.left = '0';
    }
    this.modalService.openModal(this.modalId);
  }

  closeModal() {
    this.isOpen = false;
    this.modalService.closeModal(this.modalId);
    this.isFullScreen = false;
    this.onCloseModal.emit(this.modalId);
  }

  toggleFullScreen() {
    this.isFullScreen = !this.isFullScreen;
    if (this.isFullScreen || this.isMobile) {
      this.top = '0';
      this.left = '0';
    } else {
      this.top = '50px';
      this.left = '50px';
    }
    this.onToggleFullScreen.emit({
      isFullScreen: this.isFullScreen,
      modalId: this.modalId
    });
  }

  // Handle mouse down event for dragging
  onMouseDown(event: MouseEvent) {
    this.offsetX = event.clientX - parseInt(this.left);
    this.offsetY = event.clientY - parseInt(this.top);
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  // Handle mouse move event
  onMouseMove = (event: MouseEvent) => {
    this.left = `${event.clientX - this.offsetX}px`;
    this.top = `${event.clientY - this.offsetY}px`;
  };

  // Handle mouse up event
  onMouseUp = () => {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  };

  // Handle click to bring modal to front
  bringToFront() {
    this.modalService.bringToFront(this.modalId);
  }
}
