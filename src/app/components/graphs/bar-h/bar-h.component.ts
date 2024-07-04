import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-bar-h',
  templateUrl: './bar-h.component.html',
  styleUrl: './bar-h.component.css'
})

export class BarHComponent {

  @Input() data?: any[];
  @Input() xLabel: string = '';
  @Input() yLabel: string = '';

    // options
    showXAxis: boolean = true;
    showYAxis: boolean = true;
    gradient: boolean = true;
    showLegend: boolean = true;
    showXAxisLabel: boolean = true;
    yAxisLabel: string = this.yLabel;
    showYAxisLabel: boolean = true;
    xAxisLabel: string = this.xLabel;
    colorScheme = 'nightLights';

    constructor() {
    Object.assign(this, { single: this.data });
    }
}
