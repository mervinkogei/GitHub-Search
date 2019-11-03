import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {environment} from '../environments/environment';
// import { GithubSearchFormComponent } from './github-search-form/github-search-form.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitSearch {
  // user: Username[] = [];
  _URL = 'https://api.github.com/users/';
  token = '?access_token=a7bc763c5aa378e07575b0658605e6f4a8d85a13';

  constructor(private http: HttpClient) {
  }

  searchMyUser(searchTerm: string) {
    interface data {
      login: string;
      avatar_url: string;
      following: string;
      followers: string;
      public_repos: string;
    }

    return new Promise((resolve, reject) => {
      this.user = [];
      this.http.get<data>(this._URL + searchTerm + this.token).toPromise().then(
        (results) => {
          this.user.push(results);
          resolve();
        },
        (error) => {
          reject();
        }
      );
    });
  }
}