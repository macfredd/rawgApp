import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private httpClient: HttpClient) { }

  getGames() {
    return this.httpClient.get(`${environment.apiUrl}/games?key=${environment.apiKey}`);
  }

  getGameById(id: number) {
    return this.httpClient.get(`${environment.apiUrl}/games/${id}?key=${environment.apiKey}`);
  }

  getGamePhotos(id: number) {
    return this.httpClient.get(`${environment.apiUrl}/games/${id}/screenshots?key=${environment.apiKey}`);
  }
}
