import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { ModalComponent } from "./modal/modal.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { RouterModule } from "@angular/router";
import { GridComponent } from "./grid/grid.component";
import { ImageViewerComponent } from "./image-viewer/image-viewer.component";
import { StripComponent } from "./strip/strip.component";

@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    ModalComponent,
    CarouselComponent,
    GridComponent,
    ImageViewerComponent,
    StripComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    SideBarComponent,
    ModalComponent,
    CarouselComponent,
    GridComponent,
    ImageViewerComponent,
    StripComponent,
  ],
})
export class SharedModule {}
