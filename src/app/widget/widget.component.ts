import { Component, Input } from '@angular/core';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css'
})
export class WidgetComponent {
  isMobile: boolean;
  constructor(private _utilService: UtilService) {
    this.isMobile = _utilService.isMobile();
  }
  @Input() imgSrc: string = '';
  @Input() name: string = '';
}
