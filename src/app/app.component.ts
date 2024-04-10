import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1';
checked: any;
  constructor(private primengConfig: PrimeNGConfig, private translate: TranslateService, @Inject(DOCUMENT) private document: Document) {
    translate.setDefaultLang('en');
    // Set up PrimeNG to use translations
    this.primengConfig.setTranslation({
      // Add translations for PrimeNG components
      // Example:
      // 'primeng': {
      //     // Add translations for PrimeNG components here
      // }

    });

  }
  switchLanguage(event: any): void {
    const direction = event.target.value === 'ar' ? 'rtl' : 'ltr';
    this.document.body.dir = direction;
    const lang = event.target.value
    this.translate.use(lang); // Change the active language
  }
  textToCopy: string = '';
  copyToClipboard(inputField: HTMLInputElement) {
    inputField.select();
    document.execCommand('copy');
  }
}
