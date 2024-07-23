import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrl: "./carousel.component.css",
})
export class CarouselComponent implements OnChanges {
  @Input() games: any[] = [];
  isLoading: boolean = true;

  ngOnChanges() {
    if (this.games && this.games.length > 0) {
      this.isLoading = false;
    }
  }
}
