import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public  translateService: TranslateService) {}

  switchLanguage(language: string) {
    this.translateService.use(language);
  }
}
