import { Component, OnInit } from '@angular/core';
import { NotificationService, Notification } from '../services/notification.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit {
  notifications: Notification[] = [];
  isMobile: boolean;

  constructor(private notificationService: NotificationService, private sanitizer: DomSanitizer, private _utilService: UtilService) {
    this.isMobile = _utilService.isMobile();
  }

  ngOnInit(): void {
    this.notificationService.notifications$.subscribe(notifications => {
      this.notifications = notifications;
    });
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  getNotificationClasses(notification: Notification) {
    let val = this.isMobile ? 'text-xs p-2 ' : 'text-lg p-4 ';
    switch (notification.type) {
      case 'success':
        val += 'bg-gray-300 text-black';
        break;
      case 'error':
        val +=  'bg-red-500 text-white';
        break;
      case 'info':
        val +=  'bg-blue-500 text-white';
        break;
      case 'warning':
        val +=  'bg-yellow-500 text-black';
        break;
      default:
        val +=  'bg-gray-500 text-white';
    }
    return val;
  }

  dismissNotification(notification: Notification) {
    this.notificationService.dismissNotification(notification);
  }
}
