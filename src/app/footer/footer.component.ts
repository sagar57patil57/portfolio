import { Component, EventEmitter, Output, QueryList, ViewChildren } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { ModalComponent } from '../shared/modal/modal.component';
import { AudioService } from '../services/audio.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  modals: any[] = [];

  constructor(private modalService: ModalService, private audioService: AudioService, private _dataService: DataService) {
    const data = this._dataService.getApplications(true);
    this.modals = data;
  }

  @ViewChildren(ModalComponent) modalComponents!: QueryList<ModalComponent>;
  @Output() onModalSelected = new EventEmitter<string>();

  openModal(modalId: string) {
    this.onModalSelected.emit(modalId);
    this.audioService.playAudio();
    return;
    // const modal = this.modalComponents.find(m => m.modalId === modalId);
    // if (modal) {
    //   // modal.modalContent = this.modals.find(m => m.id === modalId)?.content || ''; // Assign content
    //   modal.openModal(); // Open the modal using the component reference
    // }
  }
}
