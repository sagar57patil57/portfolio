import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  @HostListener('window:scroll', ['$event'])
  showContactBtn: boolean = true;
  companyData: any[] = [];
  skills: any = [];
  achievements: any[] = [];
  isMobile: boolean = false;
  constructor(private utilService: UtilService, private _dataService: DataService) {
    this.isMobile = utilService.isMobile();
  }
  @ViewChild('portfolioBody') portfolioBody!: ElementRef;

  ngOnInit() {
    this.skills = this._dataService.getSkills();
    this.companyData = this._dataService.getCompanyData();
    this.achievements = this._dataService.getAchievements();
    setTimeout(() => {
      this.showContactBtn = true;
    }, 3000);
  }

  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
    const heroElement = document.querySelector('.hero') as HTMLElement;
    heroElement.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  }

  scrollToBottom() {
    try {
      this.portfolioBody.nativeElement.scrollTop = this.portfolioBody.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Error scrolling to the bottom:', err);
    }
  }
}
