import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Notification {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  timeout?: number; // Optional timeout for auto-dismiss
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationsSubject = new BehaviorSubject<Notification[]>([]);
  notifications$ = this.notificationsSubject.asObservable();

  private notifications: Notification[] = [];

  constructor() {}

  showNotification(notification: Notification) {
    this.notifications.push(notification);
    this.notificationsSubject.next([...this.notifications]);

    // Auto dismiss notification after timeout
    if (notification.timeout) {
      setTimeout(() => {
        this.dismissNotification(notification);
      }, notification.timeout);
    }
  }

  dismissNotification(notification: Notification) {
    this.notifications = this.notifications.filter(n => n !== notification);
    this.notificationsSubject.next([...this.notifications]);
  }
}
