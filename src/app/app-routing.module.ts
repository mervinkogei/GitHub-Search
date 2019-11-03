import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GithubSearchComponent} from './github-search/github-search.component'
import { GithubNotFoundComponent } from './github-not-found/github-not-found.component';
import { GithubRepoComponent } from './github-repo/github-repo.component';


const routes: Routes = [
  {path: 'username', component: GithubSearchComponent},
  {path: 'repo', component: GithubRepoComponent},
  {path: '', redirectTo: '/username', pathMatch: 'full'},
  {path: '**', component : GithubNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}