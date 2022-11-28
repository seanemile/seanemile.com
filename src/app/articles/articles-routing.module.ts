import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Article1Component } from './article1/article1.component';
import { ArticlesDashboardComponent } from './articles-dashboard/articles-dashboard.component';

const routes: Routes = [
  { path: 'article1', component: Article1Component },
  { path: 'articles', component: ArticlesDashboardComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
