import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-strip',
  templateUrl: './strip.component.html',
  styleUrl: './strip.component.css'
})
export class StripComponent implements AfterViewInit, OnInit {

  @Input() title: string = 'Title Section';
  @Input() games: any[] = [];

  constructor() {

  }
  ngOnInit(): void {
    console.log(this.title)
    console.log(this.games)
  }

  ngAfterViewInit(): void {
    $('#continuousCarousel').on('slide.bs.carousel', (e: any) => {
      const $e = $(e.relatedTarget);
      const idx = $e.index();
      const itemsPerSlide = 6;
      const totalItems = $('.carousel-item').length;

      if (idx >= totalItems - (itemsPerSlide - 1)) {
        const it = itemsPerSlide - (totalItems - idx);
        for (let i = 0; i < it; i++) {
          if (e.direction === 'left') {
            $('.carousel-item').eq(i).appendTo('.carousel-inner');
          } else {
            $('.carousel-item').eq(0).appendTo('.carousel-inner');
          }
        }
      }
    });
  }

}
