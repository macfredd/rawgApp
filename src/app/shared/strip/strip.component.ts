import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
} from "@angular/core";
import { CheckImagePipe } from "../../pipes/checkimage.pipe";

@Component({
  selector: "app-strip",
  templateUrl: "./strip.component.html",
  styleUrl: "./strip.component.css",
})
export class StripComponent implements AfterViewInit, OnInit, OnChanges {
  @Input() title: string = "Title Section";
  @Input() games: any[] = [];

  constructor(private checkImagePipe: CheckImagePipe) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.games && this.games.length > 0) {
      this.games.forEach((game) => {
        this.checkImagePipe.transform(game.background_image).then((url) => {
          game.safeImageUrl = url;
        });
      });
    }
  }

  ngAfterViewInit(): void {
    $("#continuousCarousel").on("slide.bs.carousel", (e: any) => {
      const $e = $(e.relatedTarget);
      const idx = $e.index();
      const itemsPerSlide = 6;
      const totalItems = $(".carousel-item").length;

      if (idx >= totalItems - (itemsPerSlide - 1)) {
        const it = itemsPerSlide - (totalItems - idx);
        for (let i = 0; i < it; i++) {
          if (e.direction === "left") {
            $(".carousel-item").eq(i).appendTo(".carousel-inner");
          } else {
            $(".carousel-item").eq(0).appendTo(".carousel-inner");
          }
        }
      }
    });
  }
}
