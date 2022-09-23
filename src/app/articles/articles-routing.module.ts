import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleHomeComponent } from './article-home/article-home.component';

const routes: Routes = [
  {path: 'articles' ,component: ArticleHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
