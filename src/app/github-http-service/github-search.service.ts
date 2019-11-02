import { Injectable } from '@angular/core';
import { Repository } from '../repository';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { promise } from 'protractor';
import { resolve} from 'dns';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
  _URL = 'https://api.github.com/users/';
  token = '?access_token=3cbbddb991c02e7d5a2f0fd4224f9267a5153e5f';
  constructor(public  http: HttpClient) {
  }

  getRepo(searchTerm: string): Observable<any> {
    return this.http.get(this._URL + searchTerm + '/repos?' + this.token);
  }
}