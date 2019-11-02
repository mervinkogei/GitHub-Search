import { Injectable } from '@angular/core';
import { Repository } from '../repository';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  user:User;
  repository:Repository;
  username: any;
  githubSearch: any;

  constructor( public httpClient:HttpClient) { 
    this.user= new User('','','','',0,0,new Date(),0,0);
    this.repository = new Repository('','','');
  }

  gitSearch(gitUsername:string){
    console.log(this.gitUsername)
    interface ApiResponse {
         avatar_url:any,
         username: string,
         company: string,
         location: string,
         followers: number,
         following: number,
         created_at: Date,
         public_repos: number,
         html_url: any,
    }
    let githubSearch = 'https://api.github.com/users/' + gitUsername + '?access_token=' + environment.apiurl;
    console.log(this.githubSearch);
  }
  gitUsername(gitUsername: any) {
    throw new Error("Method not implemented.");
  }
}

  let promise = new Promise((resolve, reject) => {

    this.http.get<ApiResponse>(githubSearch).toPromise().then(
      (results) => {

        console.log(results);
        this.user = results;
        console.log(this.user);

        resolve();
      },
      (error) => {
        console.log(error);
        reject();
      }
    );
  });
  return promise;


}
