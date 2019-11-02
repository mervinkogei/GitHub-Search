import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubSearchFormComponent } from './github-search-form/github-search-form.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GithubSearchComponent,
    GithubSearchFormComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
    // ApiResponse
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
