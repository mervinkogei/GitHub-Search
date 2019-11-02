import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-repo',
  templateUrl: './github-repo.component.html',
  styleUrls: ['./github-repo.component.css']
})
export class GithubRepoComponent implements OnInit {

  gitRepo: RepoModel[];

  constructor(public reposerv: RepoServiceService) {
  }

  getRepo(searchTerm: string) {
    this.reposerv.getRepo(searchTerm).subscribe(data => {
      this.gitRepo = data;
      console.log(this.gitRepo);
    });
  }

  ngOnInit() {
    this.getRepo('mervinkogei');
  }
}