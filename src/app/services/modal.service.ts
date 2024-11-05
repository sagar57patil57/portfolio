import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: { modalId: string; zIndex: number }[] = [];
  private zIndexCounter: number = 100; // Start z-index counter from 1000

  openModal(modalId: string) {
    const existingIndex = this.modals.findIndex((m) => m.modalId === modalId);
    if (existingIndex > -1) {
      this.modals.splice(existingIndex, 1); // Remove from old position
    }
    this.modals.push({ modalId, zIndex: this.zIndexCounter }); // Use counter for zIndex
    this.zIndexCounter += 1; // Increment the counter for the next modal
  }

  bringToFront(modalId: string) {
    const existingIndex = this.modals.findIndex((m) => m.modalId === modalId);
    if (existingIndex > -1) {
      const modal = this.modals.splice(existingIndex, 1)[0]; // Remove from old position
      this.modals.push({ ...modal, zIndex: this.zIndexCounter }); // Push to the end with updated zIndex
      this.zIndexCounter += 1; // Increment the counter for the next modal
    }
  }

  getZIndex(modalId: string): number {
    const modal = this.modals.find((m) => m.modalId === modalId);
    return modal ? modal.zIndex : 10; // Return default zIndex if not found
  }

  closeModal(modalId: string) {
    this.modals = this.modals.filter((m) => m.modalId !== modalId);
  }
}
