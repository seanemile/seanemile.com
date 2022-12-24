import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Article1Component } from './article1/article1.component';
import { Article2Component } from './article2/article2.component';
import { ArticlesDashboardComponent } from './articles-dashboard/articles-dashboard.component';

const routes: Routes = [
  {
    path: 'articles',
    title: 'Articles',
    component: ArticlesDashboardComponent,
  },
  {
    path: 'article1',
    title: 'Gas Optimization in Solidity',
    component: Article1Component,
  },
  {
    path: 'article2',
    title: 'Vulnerabilities in solidity',
    component: Article2Component,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
