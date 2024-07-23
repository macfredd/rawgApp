import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class PublishersService {
  constructor(private httpClient: HttpClient) {}

  getPublishers() {
    return this.httpClient.get(`${environment.apiUrl}/publishers`);
  }

  getPublisherById(id: number) {
    return this.httpClient.get(`${environment.apiUrl}/publishers/${id}`);
  }
}
