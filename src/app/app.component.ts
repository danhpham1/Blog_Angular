import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-project';
  currentUrl: boolean;
  isLoad: boolean = false;
  constructor(private route: Router) {

  }

  ngOnInit(): void {
    this.isLoad = true;
    this.route.events.subscribe((res) => {
      // console.log(this.route.url);
      this.currentUrl = this.route.url.includes("post");
      // console.log(this.currentUrl);
      this.isLoad = false;
    })
  }



}
