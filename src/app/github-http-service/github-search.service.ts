import { Injectable } from '@angular/core';
import { Repository } from '../repository';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { promise } from 'protractor';
import { resolve} from 'dns';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  user:User;
  repo:Repository;
  username: any;
  githubSearch: any;

  constructor( public httpClient:HttpClient) { 
    this.user= new User('','','','',0,0,new Date(),0,0);
    this.repo = new Repository('','','');
  }

  gitUsername(gitUsername:string){
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
}
  let promise = new Promise((resolve, reject) => {

    this.http.get<ApiResponse>(githubSearch).toPromise().then(
      (output) => {

        console.log(output);
        this.user = output;
        console.log(this.User);

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
gitRepo(repo:string) {

    interface ApiResponse {
     name: string;
     description: string;
     html_url: string;
     
    }

    let githubSearch = 'https://api.github.com/users/' + gitRepo + '/repos?access_token=' + environment.apiurl;

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(githubSearch).toPromise().then(
        (repoOutput) => {
          console.log(repoOutput);
          this.repo = repoOutput;
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
}
