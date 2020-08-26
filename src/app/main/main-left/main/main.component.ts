import { Component, OnInit } from '@angular/core';
import { PostService } from "../../../service/post.service";
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  blogNews: Array<any>;
  cssBlogs: Array<any>;
  htmlBlogs: Array<any>;
  jsBlogs: Array<any>;
  nodejsBlogs: Array<any>;
  mongodbBlogs: Array<any>;

  isLoad: Boolean = false;


  constructor(private postService: PostService, private ngxSpinService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.ngxSpinService.show();
    this.postService.getAllPost()
      .subscribe(result => {
        this.blogNews = [...result["data"]].reverse().splice(0, 6);
        this.cssBlogs = [...result["data"]].filter((el) => { return el.nameTitle == "CSS" }).splice(0, 3);
        this.htmlBlogs = [...result["data"]].filter(el => { return el.nameTitle == "HTML" }).splice(0, 3);
        this.jsBlogs = [...result["data"]].filter(el => { return el.nameTitle == "Javascript" }).splice(0, 4);
        this.nodejsBlogs = [...result["data"]].filter(el => { return el.nameTitle == "Nodejs" }).splice(0, 3);
        this.mongodbBlogs = [...result["data"]].filter(el => { return el.nameTitle == "Mongodb" }).slice(0, 3);
        this.isLoad = true;
        // console.log(this.mongodbBlogs);
        // console.log(result["data"]);
        this.ngxSpinService.hide();
      })
  }

}
