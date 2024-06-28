import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GameComponent } from '../components/game/game.component';


const childRoutes: Routes = [
  { path: '', component: DashboardComponent, data: { title: 'Dashboard' }},
  { path: 'game/:id', component: GameComponent, data: { title: 'Game' }},

];


@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildsRoutesModule { }
