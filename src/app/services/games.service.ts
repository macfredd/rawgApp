import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private httpClient: HttpClient) { }

  getGames() {
    return this.httpClient.get(`${environment.apiUrl}/games`);
  }

  getGameById(id: number) {
    return this.httpClient.get(`${environment.apiUrl}/games/${id}`);
  }

  /**
   * Get phostos of a game
   * @param id Game id
   * @returns Game videos
   */
  getGamePhotos(id: number) {
    return this.httpClient.get(`${environment.apiUrl}/games/${id}/screenshots`);
  }

  /**
   * Get the game platforms of a game
   * @param id Game id
   * @returns Game platforms
  */
  getGameAdditions(id: number) {
    return this.httpClient.get(`${environment.apiUrl}/games/${id}/additions`);
  }

  /**
   * Get the game series of a game
   * @param id Game id
   * @returns Game series
   */
  getGameSeries(id: number) {
    return this.httpClient.get(`${environment.apiUrl}/games/${id}/game-series`);
  }

  /**
   * Get the best games of the last year
   * @param minRating Minimum rating of the games
   * @param from Start date
   * @param to End date
   * @returns Best games of the last year
   */
  getBestGamesLastYear(minRating: number,  from: string, to: string) {
    return this.httpClient.get(`${environment.apiUrl}/games?dates=${from},${to}&ordering=-rating`)
          .pipe(
            map((games: any) => games.results.filter((game: any) => game.rating >= minRating))
          );
  }
}
