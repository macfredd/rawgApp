import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  public best3gamesLastMonth: any[] = [];

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {

    const currentDate = new Date();
    const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate()); 

    this.gameService.getBestGamesByDateRange(4, this.formatDate(lastMonth), this.formatDate(currentDate))
      .subscribe((games: any[]) => {
        this.best3gamesLastMonth = games.slice(0, 3);
        console.log(this.best3gamesLastMonth);
      });
  }

  private formatDate(date: Date): string {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }

}
