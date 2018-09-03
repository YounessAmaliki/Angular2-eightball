import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';

let questions = ['It is certain','It is decidedly so','Without a doubt','Yes definitely','You may rely on it'];


@Injectable()
export class AnswerService {

   private posts_url = 'http://jsonplaceholder.typicode.com/';

   constructor(private http: HttpClient) {}

   // get all posts
   getAllPosts(): Observable<Post[]> {
      let url = `${this.posts_url}posts`;

      return this.http.get<Post[]>(url);
   }

   // get comments based on the index
   getCommentsForPost(index: number): Observable<Comment[]> {
      let url = `${this.posts_url}post/${index}/comments`;

      return this.http.get<Comment[]>(url);
   }
}
