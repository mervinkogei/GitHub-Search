import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubSearchFormComponent } from './github-search-form/github-search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GithubSearchComponent,
    GithubSearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
