import { Component, OnInit } from '@angular/core';
import { PostService } from "../service/post.service";

@Component({
  selector: 'app-content-top',
  templateUrl: './content-top.component.html',
  styleUrls: ['./content-top.component.css']
})
export class ContentTopComponent implements OnInit {
  postsRandom: Array<any>;
  isLoad: Boolean = false;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getRandomPost(3)
      .subscribe(postsRandom => {
        this.postsRandom = postsRandom["data"];
        this.isLoad = true;
      })
  }

}
