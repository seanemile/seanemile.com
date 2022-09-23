import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleHomeComponent } from './article-home/article-home.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    ArticleHomeComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MaterialModule,
  ]
})
export class ArticlesModule { }
