import { Component } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  public game?: any;

  constructor(private gamesService: GamesService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activateRoute.params.subscribe(params => {
      const gameId = params['id'];
      this.getGameById(gameId);
    });
  }

  getGameById(id: number) {
    this.gamesService.getGameById(id).subscribe((game: any) => {
      this.game = game;
    });
  }

  get shortDescription() {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = this.game.description;
    const firstParagraph = tempDiv.querySelector('p')?.textContent;

    tempDiv.remove();

    return firstParagraph ? firstParagraph.slice(0, 300) : '';
  }
}
