import { ChangeDetectionStrategy, Component, QueryList, ViewChildren } from '@angular/core';
import { ModalComponent } from './shared/modal/modal.component';
import { UtilService } from './services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  showSplash = true;
  isMobile: boolean;
  constructor(
    private utilService: UtilService
  ) {
    this.isMobile = this.utilService.isMobile();
  }
  @ViewChildren(ModalComponent) modalComponents!: QueryList<ModalComponent>;
  
  openModal(modalId: any) {
    const modal = this.modalComponents.find(m => m.modalId === modalId);
    if (modal) {
      // modal.modalContent = this.modals.find(m => m.id === modalId)?.content || ''; // Assign content
      modal.openModal(); // Open the modal using the component reference
    }
  }
  openGoogle() {
    window.open('https://www.google.com/webhp?igu=1', '_self');
  }

  ngOnInit(): void {
    // Hide the splash screen after 3 seconds (or whatever duration)
    setTimeout(() => {
      this.showSplash = false;
    }, 2000);
  }
}
