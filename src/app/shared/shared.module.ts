import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ModalComponent } from './modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    ModalComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule
  ], exports: [
    HeaderComponent,
    SideBarComponent,
    ModalComponent,
    CarouselComponent,
  ]
})
export class SharedModule { }
