import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list/game-list.component';
import { GameComponent } from './game/game.component';



@NgModule({
  declarations: [
    GameListComponent,
    GameComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GameListComponent,
    GameComponent
  ]
})
export class ComponentsModule { }
