import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent implements OnChanges{

  @Input() title: string = 'Title Section';
  @Input() games: any[] = [];
  @Input() privateColor: string = 'black';
  @Input() secondaryCOlor: string = 'gray';
  isLoading: boolean = true;

  ngOnChanges() {
    if (this.games && this.games.length > 0) {
      this.isLoading = false;
    }
  }
}
