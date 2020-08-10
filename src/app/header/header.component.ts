import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../service/category.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categoryList: Array<any> = []

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategory()
      .subscribe(categorys => {
        // console.log(categorys["data"]);
        this.categoryList = categorys["data"];
      })
  }

}
