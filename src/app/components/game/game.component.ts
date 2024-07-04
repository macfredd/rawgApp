import { Component } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  public game: any = {};
  public screenshots: any[] = [];
  public ratings: any[] = [];
  public platforms: any[] = [];

  constructor(private gamesService: GamesService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activateRoute.params.subscribe(params => {
      const gameId = params['id'];
      this.getGameById(gameId);
      this.getGameScreenshots(gameId);
    });
  }

  getGameById(id: number) {
    this.gamesService.getGameById(id).subscribe((game: any) => {
      this.game = game;
      this.ratings = game.ratings.map((rating: any) => {
        return {
          name: rating.title.charAt(0).toUpperCase() + rating.title.slice(1),
          value: rating.count
          };
        }
      );

      console.log(game.platforms);

      this.platforms = game.platforms;
    });
  }

  getGameScreenshots(id: number) {
    this.gamesService.getGamePhotos(id).subscribe((screenshots: any) => {
      this.screenshots = screenshots.results;
    });
  }

  get shortDescription() {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = this.game.description;
    const firstParagraph = tempDiv.querySelector('p')?.textContent;

    tempDiv.remove();

    return firstParagraph ? firstParagraph.slice(0, 300) + '...' : '';
  }

  get fullDescription() {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = this.game.description;
    const paragraphs = Array.from(tempDiv.querySelectorAll('p'));

    let fullDescription = '';
    let wordCount = 0;
    const maxWords = 66;

    for (const p of paragraphs) {
      if ( p.textContent) {
        const words = p.textContent.split(/\s+/);
        for (const word of words) {
            if (wordCount < maxWords) {
                fullDescription += word + ' ';
                wordCount++;
            } else {
                break;
            }
        }
        if (wordCount >= maxWords) {
            break;
        }
        fullDescription += '\n';
      }
    }

    fullDescription = fullDescription.trim();

    // Añadir el enlace al final
    fullDescription += ` <a href="${this.game.website}" target="_blank">More info</a>`;

    tempDiv.remove();

    return fullDescription;
}

}
