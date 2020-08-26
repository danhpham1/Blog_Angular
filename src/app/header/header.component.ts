import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../service/category.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUrl: string = ''
  categoryList: Array<any> = []

  constructor(private categoryService: CategoryService, private route: Router) { }

  ngOnInit(): void {
    this.categoryService.getCategory()
      .subscribe(categorys => {
        // console.log(categorys["data"]);
        this.categoryList = categorys["data"];
        this.route.events.subscribe((res) => {
          // console.log(this.route.url);
          let urlStem = this.route.url.split('/');
          this.currentUrl = urlStem[urlStem.length - 1];
          // console.log(this.currentUrl == '');
          // console.log(this.currentUrl);
        })
      })
  }

}
