import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { addApiKeyInterceptor } from './interceptors/add-api-key.interceptor';
import { BarHComponent } from './components/graphs/bar-h/bar-h.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideHttpClient(
      withInterceptors([addApiKeyInterceptor])
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
