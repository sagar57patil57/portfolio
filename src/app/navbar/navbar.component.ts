import { Component, ElementRef, HostListener } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isPopoverOpen = false;
  buttonPosition = { top: 0, left: 0 };
  currentDate:Date;
  notificationConfig: any;
  context: string = '';
  wifiData = [
    { name: 'Airtel wifi', status: 'Connected' },
    { name: 'Orton`s iphone', status: '' },
    { name: 'BSNL 4G', status: '' },
  ]
  isMobile: boolean;

  constructor(
    private elementRef: ElementRef,
    private notificationService: NotificationService,
    private utilService: UtilService
    ) {
    this.currentDate = new Date();
    this.isMobile = this.utilService.isMobile();
  }

  ngOnInit() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  togglePopover(event: MouseEvent, context: string) {
    this.isPopoverOpen = !this.isPopoverOpen;
    this.context = context;
    if (this.isPopoverOpen) {
      // Get the position of the clicked button
      const button = event.target as HTMLElement;
      const rect = button.getBoundingClientRect();
      this.buttonPosition.top = rect.top + window.scrollY; // Position relative to the viewport
      this.buttonPosition.left = rect.left + window.scrollX; // Position relative to the viewport
    }
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: HTMLElement) {
    const popover = this.elementRef.nativeElement.querySelector('.popover');
    const icon = this.elementRef.nativeElement.querySelector('img');
    if (this.isPopoverOpen && !popover.contains(target) && target !== icon) {
      this.isPopoverOpen = false;
    }
  }

  showNotifications () {
    this.notificationConfig = this.utilService.getNotificationConfig()
    this.notificationConfig.forEach((config: any) => {
      const payload = {
        message: this.utilService.getNotificationTemplate(config.title, config.desc),
        type: config.type || 'success',
        timeout: config.timeout // Auto-dismiss after 3 seconds
      }
      if (config.delay) {
        setTimeout(() => {
          this.notificationService.showNotification(payload);
        }, config.delay);
      } else {
        this.notificationService.showNotification(payload);
      }
    })
  }

  updateWifiStatus(index: number) {
    this.wifiData.forEach((wifi, i) => {
      if (i === index) {
        wifi.status = 'Connecting...';
      } else {
        wifi.status = '';
      }
    });
    setTimeout(() => {
      this.wifiData[index].status = 'Connected';
    }, 3000);
  }
}
