import { Component, EventEmitter, Output, QueryList, ViewChildren } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { ModalComponent } from '../shared/modal/modal.component';
import { UtilService } from '../services/util.service';
import { AudioService } from '../services/audio.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  isMobile: boolean;
  @ViewChildren(ModalComponent) modalComponents!: QueryList<ModalComponent>;
  @Output() onModalSelected = new EventEmitter<string>();

  items: any[] = [
    // { id: 'File Explorer', name: 'My PC', imgSrc: 'https://img.icons8.com/?size=100&id=20420&format=png&color=000000' },
    // { id: 'Portfolio', name: 'Portfolio', imgSrc: 'https://img.icons8.com/?size=100&id=ognMDWHTIaDL&format=png&color=000000' },
    // { id: 'Resume', name: ' Resume', imgSrc: 'https://img.icons8.com/?size=100&id=9eK5RgdglDbA&format=png&color=000000g' },
    // { id: 'Terminal', name: 'Terminal', imgSrc: 'https://img.icons8.com/?size=100&id=nuPce-GYYZeC&format=png&color=000000' },
    // { id: 'Linkedin', name: 'LinkedIn', imgSrc: 'https://img.icons8.com/?size=100&id=13930&format=png&color=000000', link: 'https://www.linkedin.com/in/sagar-patil-57srp/' },
    // { id: 'Chrome', name: 'Chrome', imgSrc: 'https://img.icons8.com/?size=100&id=63785&format=png&color=000000' },
    // { id: 'Settings', name: 'Settings', imgSrc: 'https://img.icons8.com/?size=100&id=flyFkP7sj07V&format=png&color=000000' },
    // { id: 'Compiler', name: 'Compiler', imgSrc: 'https://img.icons8.com/?size=100&id=1ZSHk8m9bk4p&format=png&color=000000' },
    // { id: 'Calculator', name: 'Calculator', imgSrc: 'https://img.icons8.com/?size=100&id=12780&format=png&color=000000' },
    // { id: 'Camera', name: 'Camera', imgSrc: 'https://img.icons8.com/?size=100&id=xZiTPdO57ltQ&format=png&color=000000' }
  ];  
  
  constructor(private modalService: ModalService, private _utilService: UtilService, private audioService: AudioService, private _dataService: DataService) {
    this.isMobile = _utilService.isMobile();
    this.items = this._dataService.getApplications();
  }

  onItemClicked (item: any) {
    this.audioService.playAudio();
    if (!item?.link) {
      this.openModal(item?.id);
      return;
    }
    this.redirectToLinkedIn(item?.link);
  }

  redirectToLinkedIn(link: string) {
    const width = 600;
    const height = 400;
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);
    window.open(
      link, 
      '_blank', 
      `width=${width},height=${height},top=${top},left=${left}`
    );
  }

  openModal(modalId: string) {
    this.onModalSelected.emit(modalId);
    return;
  }
}
