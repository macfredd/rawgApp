import { Component, OnInit } from "@angular/core";
import { GamesService } from "../../services/games.service";
import { GenresService } from "../../services/genres.service";
import { forkJoin, map, switchMap, tap } from "rxjs";
import { DatesService } from "../../services/dates.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.css",
})
export class DashboardComponent implements OnInit {
  public bestGamesLastMonth: any[] = [];
  public FuturesGames: any[] = [];
  public bestGamesByGenre: any[] = [];

  isLoading: boolean = true;

  constructor(
    private gameService: GamesService,
    private genreService: GenresService,
    private dateService: DatesService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.fillBestGamesLastMonth();
    this.fillFuturesGames();
    this.fillBestGamesByGenre();
    this.isLoading = false;
  }

  private fillBestGamesLastMonth(): void {
    this.gameService
      .getBestGamesByDateRange(
        3,
        this.dateService.formatDate(this.dateService.getDates().lastMonth),
        this.dateService.formatDate(this.dateService.currentDate)
      )
      .subscribe((games: any[]) => {
        this.bestGamesLastMonth = games.slice(0, 3);
      });
  }

  private fillFuturesGames(): void {
    this.gameService
      .getBestGamesByDateRange(
        0,
        this.dateService.formatDate(this.dateService.currentDate),
        this.dateService.formatDate(this.dateService.getDates().future(60))
      )
      .subscribe((games: any[]) => {
        this.FuturesGames = games;
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
                this.dateService.formatDate(
                  this.dateService.getDates().last6Months
                ),
                this.dateService.formatDate(this.dateService.currentDate),
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
        this.bestGamesByGenre = results.filter(
          (result: any) => result.games.length > 1
        );

        this.bestGamesByGenre = this.gameService.cleanGames(
          this.bestGamesByGenre
        );
      });
  }

  private shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
