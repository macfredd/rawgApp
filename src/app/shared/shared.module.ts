import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    HeaderComponent,
    SideBarComponent,
    ModalComponent,
  ]
})
export class SharedModule { }
