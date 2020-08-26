import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: any;
  contentPost: any;
  relatePosts: any;
  isLoad: boolean = false;
  parser = new DOMParser();

  @Output() nameQuery = new EventEmitter<string>();
  constructor(private postService: PostService, private ngxSpinService: NgxSpinnerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.routeConfig["path"]);

    this.nameQuery.emit(this.route.snapshot.routeConfig["path"]);
    this.postService.getPost(this.route.snapshot.params["id"])
      .subscribe(post => {
        this.ngxSpinService.show();
        this.isLoad = true;
        if (post["result"] == 1) {
          this.post = post["data"];
          //change url img
          let changeSrcImg = this.parser.parseFromString(this.post["content"], 'text/html');
          changeSrcImg.body.querySelectorAll("img").forEach(el => {
            let valSrc: any = el.src;
            valSrc = valSrc.split("/");
            el.src = "";
            el.src = "https://immense-eyrie-97426.herokuapp.com/img/post-img/" + valSrc[valSrc.length - 1];
          });
          this.contentPost = changeSrcImg.body.innerHTML;
          // console.log(this.contentPost);
          this.postService.getAllPost(this.post["nameTitle"]).subscribe(posts => {
            this.relatePosts = [...posts["data"]].filter(el => el._id != this.post._id);
            this.isLoad = false;
            this.ngxSpinService.hide();
          })
        }
      })
  }

}
