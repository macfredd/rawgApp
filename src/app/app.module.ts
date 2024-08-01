import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PagesModule } from "./pages/pages.module";
import { SharedModule } from "./shared/shared.module";
import {
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { addApiKeyInterceptor } from "./interceptors/add-api-key.interceptor";
import { RouterModule } from "@angular/router";
import { CheckImagePipe } from "./pipes/checkimage.pipe";

@NgModule({
  declarations: [AppComponent, CheckImagePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,
    RouterModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideHttpClient(withInterceptors([addApiKeyInterceptor])),
    CheckImagePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
