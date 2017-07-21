import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { UserService } from './../user.service';
import { User } from './../user';
import { Trivia } from './../trivia';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allQuestions: Array<Trivia>;
  constructor(private _api: UserService, private _router: Router) { }

  ngOnInit() {
  }
  letsplay(){
    this._api.lets_play()
    .then(() => {this._router.navigate(['/question/list'])})
    .catch((err) => {console.log(err)});
  }
}
