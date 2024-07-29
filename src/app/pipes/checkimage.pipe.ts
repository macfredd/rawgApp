// private placeholderUrl: string = 'https://st2.depositphotos.com/2493575/5398/i/450/depositphotos_53989081-stock-photo-black-texture.jpg';

import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { of } from "rxjs";

@Pipe({
  name: "checkImage",
})
export class CheckImagePipe implements PipeTransform {
  private placeholderUrl: string =
    "https://st2.depositphotos.com/2493575/5398/i/450/depositphotos_53989081-stock-photo-black-texture.jpg";

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  transform(imageUrl: string): Promise<SafeUrl> {
    return this.http
      .head(imageUrl, { observe: "response" })
      .pipe(catchError(() => of({ status: 404 })))
      .toPromise()
      .then((response) => {
        if (response!.status === 200) {
          return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
        } else {
          return this.sanitizer.bypassSecurityTrustUrl(this.placeholderUrl);
        }
      });
  }
}
