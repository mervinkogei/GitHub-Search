import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-github-search-form',
  templateUrl: './github-search-form.component.html',
  styleUrls: ['./github-search-form.component.css']
})
export class GithubSearchFormComponent implements OnInit {

  @Output () emitSearch = new EventEmitter<any>()

gitUsername:string;
repo:string;

  constructor() { }

  gitSearch(){
    this.emitSearch.emit(this.gitUsername);
    this.emitSearch.emit(this.repo);
    // console.log(this.username);
    // console.log(this.repo);
  }

  ngOnInit() {
  }

}
