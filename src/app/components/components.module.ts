import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list/game-list.component';
import { GameComponent } from './game/game.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarHComponent } from './graphs/bar-h/bar-h.component';



@NgModule({
  declarations: [
    GameListComponent,
    GameComponent,
    BarHComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    NgxChartsModule,
  ],
  exports: [

  ]
})
export class ComponentsModule { }
