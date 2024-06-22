import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  translatedText: string = ''; // Initialisation de la propriété

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    this.translate.get('DO_NOT_HESITATE_TO_CONTACT_US').subscribe((text: string) => {
      this.translatedText = text;
    });
  }
}