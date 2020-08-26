import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../../service/category.service";
import { PostService } from "../../service/post.service";
import { Observable, forkJoin } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-main-right',
  templateUrl: './main-right.component.html',
  styleUrls: ['./main-right.component.css']
})
export class MainRightComponent implements OnInit {

  categoryList: Array<any>;
  popularPosts: Array<any>;
  lastPosts: Array<any>;
  isLoad: boolean = false;


  constructor(private categoryService: CategoryService, private postService: PostService, private ngxSpinService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.ngxSpinService.show();
    this.isLoad = true;
    forkJoin([
      this.postService.getLastPost(4),
      this.categoryService.getCategory(),
      this.postService.getPopularPost()
    ])
      .subscribe(result => {
        // console.log(result[0]["data"])
        this.categoryList = result[1]["data"];
        this.popularPosts = result[2]["data"].splice(0, 4);
        this.lastPosts = result[0]["data"];
        this.ngxSpinService.hide();
        this.isLoad = false;
      })

  }

}
