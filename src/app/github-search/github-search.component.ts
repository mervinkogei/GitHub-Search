import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  user: GitUser[];
  particlesJS: any;

  constructor(private service: MyServiceService) {
  }

  getSearchedUser(searchTerm) {
    this.service.searchMyUser(searchTerm).then(
      (success) => {
        this.user = this.service.user;
        console.log(this.user);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getSearchedUser('kamauvick');
    // tslint:disable-next-line:prefer-const
    let particlesJS;
    particlesJS.load('particles-js', 'particles.json', null);
  }

}