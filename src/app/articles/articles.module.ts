import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { Article1Component } from './article1/article1.component';
import { ArticlesDashboardComponent } from './articles-dashboard/articles-dashboard.component';


@NgModule({
  declarations: [
    Article1Component,
    ArticlesDashboardComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesModule { }
