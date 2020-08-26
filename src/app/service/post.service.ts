import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPost(id) {
    return this.http.get(`https://immense-eyrie-97426.herokuapp.com/api//post/getPost/${id}`);
  }

  getAllPost(title?: string) {
    if (title) {
      return this.http.get(`https://immense-eyrie-97426.herokuapp.com/api/post/getAllPosts?title=${title}`);
    }
    return this.http.get("https://immense-eyrie-97426.herokuapp.com/api/post/getAllPosts");
  }

  getPopularPost() {
    return this.http.get("https://immense-eyrie-97426.herokuapp.com/api/post/getPopularPost");
  }

  getLastPost(count) {
    return this.http.get(`https://immense-eyrie-97426.herokuapp.com/api/post/getLastPost?count=${count}`);
  }

  getRandomPost(count) {
    return this.http.get(`https://immense-eyrie-97426.herokuapp.com/api/post/getPostRandom?count=${count}`);
  }
}
