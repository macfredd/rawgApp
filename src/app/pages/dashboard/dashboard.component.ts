import { Component, OnInit } from "@angular/core";
import { GamesService } from "../../services/games.service";
import { GenresService } from "../../services/genres.service";
import { forkJoin, map, switchMap, tap } from "rxjs";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.css",
})
export class DashboardComponent implements OnInit {
  public bestGamesLastMonth: any[] = [];
  public nextWeekGames: any[] = [];
  public bestGamesByGenre: any[] = [];

  //Dates
  public currentDate: Date = new Date();
  public lastMonth: Date;
  public nextWeek: Date;

  isLoading: boolean = true;

  constructor(
    private gameService: GamesService,
    private genreService: GenresService
  ) {
    this.lastMonth = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() - 1,
      this.currentDate.getDate()
    );
    this.nextWeek = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
      this.currentDate.getDate() + 30
    );
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.fillBestGamesLastMonth();
    this.fillNextWeekGames();
    this.fillBestGamesByGenre();
    this.isLoading = false;
  }

  private fillBestGamesLastMonth(): void {
    this.gameService
      .getBestGamesByDateRange(
        3,
        this.formatDate(this.lastMonth),
        this.formatDate(this.currentDate)
      )
      .subscribe((games: any[]) => {
        console.log(games);
        this.bestGamesLastMonth = games.slice(0, 3);
      });
  }

  private fillNextWeekGames(): void {
    this.gameService
      .getBestGamesByDateRange(
        0,
        this.formatDate(this.currentDate),
        this.formatDate(this.nextWeek)
      )
      .subscribe((games: any[]) => {
        this.nextWeekGames = games;
      });
  }

  private fillBestGamesByGenre(): void {
    this.genreService
      .getGenres()
      .pipe(
        switchMap((genres: any) => {
          const filteredGenres = genres.results.filter(
            (genre: any) => genre.name !== "Indie" && genre.name !== "Casual"
          );
          const selectedGenres = this.shuffle(filteredGenres).slice(0, 5);

          const gameRequests = filteredGenres.map((genre: any) =>
            this.gameService
              .getBestGamesByDateRangeAndGenre(
                0,
                this.formatDate(this.lastMonth),
                this.formatDate(this.currentDate),
                genre.id
              )
              .pipe(
                map((games: any) => ({
                  genre_id: genre.id,
                  genre_name: genre.name,
                  background_image: genre.image_background,
                  games: games,
                }))
              )
          );

          return forkJoin(gameRequests);
        })
      )
      .subscribe((results: any) => {
        this.bestGamesByGenre = results
          .filter((result: any) => result.games.length > 1);

          this.bestGamesByGenre = this.gameService.cleanGames(this.bestGamesByGenre);
      });
  }

  private shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  private formatDate(date: Date): string {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  }
}
