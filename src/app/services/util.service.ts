import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

    isMobile() {
        return window.innerWidth < 650;
    }

    getNotificationTemplate (title: string, desc: string) {
        return `
        <div class="flex items-center gap-3">
            <img src="https://img.icons8.com/?size=100&id=81443&format=png&color=000000" alt="Icon1" class="h-12 w-12">
            <div><strong>${title}</strong><p>${desc}</p></div>
            <img src="https://img.icons8.com/?size=100&id=79023&format=png&color=000000" alt="Icon1" class="h-4 w-4 absolute top-1 right-1">
        </div>
        `
    }

    getNotificationConfig () {
        return [
            {
                title: 'Best Project Award', desc: 'Built Suraksha - 2nd highest revenue feature in udChalo',timeout: 60000, type: 'success'
            },
            {
                title: 'Beyond the limit Award', desc: 'Built flutter prototype of flight booking app',timeout: 60000, type: 'success', delay: 4000
            },
            {
                title: 'Bug Bash Winner Award (2X)', desc: 'Identified critical and highest no bugs in bug bash',timeout: 60000, type: 'success', delay: 6000
            }
        ]
    }

}
