import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  nameParameter: string;
  isLoad: boolean = false;
  config: any;
  collection = { count: 0, data: [] };


  constructor(private route: ActivatedRoute, private postsService: PostService, private ngxSpinService: NgxSpinnerService) {

  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.ngxSpinService.show();
      this.isLoad = true;
      this.nameParameter = params["params"]["name"];

      if (this.nameParameter == 'news') {
        this.postsService.getAllPost().subscribe(data => {
          this.collection.count = + data["data"].length;
          this.collection.data = [...data["data"]];
          this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.collection.count
          }
          this.isLoad = false;
          this.ngxSpinService.hide();
        })
      } else {
        this.postsService.getAllPost(this.nameParameter).subscribe(data => {
          this.collection.count = + data["data"].length;
          this.collection.data = [...data["data"]];
          this.config = {
            itemsPerPage: 2,
            currentPage: 1,
            totalItems: this.collection.count
          }
          // console.log(this.config);
          this.isLoad = false;
          this.ngxSpinService.hide();
        })
      }
    })
  }


  pageChanged(event) {
    this.config.currentPage = event;
  }
}
