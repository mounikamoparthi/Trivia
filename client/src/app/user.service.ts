import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

import { User } from './user';
import { Trivia } from './trivia';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }
  create(question) {
    return this._http.post('/addQuestion', question)
    .map(data => data.json())
    .toPromise()
  }
  get_all_questions(){
    return this._http.get("/question/list")
    .map(data => data.json())
    .toPromise()
  }
  lets_play(){
    return this._http.get("/question/list")
    .map(data => data.json())
    .toPromise()
  }
  getRandomQuestions() {
     return this._http.get('/randomlist').map(data => data.json()).toPromise();
  }

}
