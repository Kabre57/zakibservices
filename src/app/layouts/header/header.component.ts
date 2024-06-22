import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selectedLanguage: string;

  constructor(public translate: TranslateService) {
    this.selectedLanguage ='en'; // Définir la langue sélectionnée sur "en" par défaut
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
