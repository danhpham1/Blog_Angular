import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './main/main-left/category/category.component';
import { MainComponent } from './main/main-left/main/main.component';
import { PostComponent } from './main/main-left/post/post.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'category/:name',
    component: CategoryComponent
  },
  {
    path: 'post/:id',
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
