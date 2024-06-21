import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tableData: any[][] = [];

  constructor() {
    this.tableData = [
      ['Cellule 1', 'Cellule 2'],
      ['Cellule 3', 'Cellule 4'],
      ['Cellule 5', 'Cellule 6'],
      ['Cellule 7', 'Cellule 8']
    ];
  }
}
