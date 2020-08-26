import { BrowserModule, } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { NgxPaginationModule } from 'ngx-pagination'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { ContentTopComponent } from './content-top/content-top.component';
import { MainRightComponent } from './main/main-right/main-right.component';
import { MainComponent } from './main/main-left/main/main.component';
import { CategoryComponent } from './main/main-left/category/category.component';
import { PostComponent } from './main/main-left/post/post.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { from } from 'rxjs';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentTopComponent,
    MainRightComponent,
    MainComponent,
    CategoryComponent,
    PostComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
