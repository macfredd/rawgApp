import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { CheckImagePipe } from "../../pipes/checkimage.pipe";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrl: "./grid.component.css",
})
export class GridComponent implements OnChanges {
  @Input() title: string = "Title Section";
  @Input() games: any[] = [];
  @Input() privateColor: string = "black";
  @Input() secondaryCOlor: string = "gray";
  @Input() SectionBgImg: string = "";

  safeImageUrl: any;

  isLoading: boolean = true;

  constructor(private checkImagePipe: CheckImagePipe) {}

  ngOnChanges() {
    if (this.games && this.games.length > 0) {
      this.games.forEach((game) => {
        this.checkImagePipe.transform(game.background_image).then((url) => {
          game.safeImageUrl = url;
        });
      });

      this.isLoading = false;
    }
  }
}
