import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private httpClient: HttpClient) { }

  getGenres() {
    return this.httpClient.get(`${environment.apiUrl}/genres`);
  }

  getGenreById(id: number) {
    return this.httpClient.get(`${environment.apiUrl}/genres/${id}`);
  }
}
