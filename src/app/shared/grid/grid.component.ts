import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {

  @Input() title: string = 'Title Section';
  @Input() games: any[] = [];
  @Input() privateColor: string = 'black';
  @Input() secondaryCOlor: string = 'gray';

}
