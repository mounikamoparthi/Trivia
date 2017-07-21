import { Component, OnInit } from '@angular/core';
import { Trivia } from './../trivia';
import { User } from './../user';
import { UserService } from './../user.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  allQuestions: Array<Trivia>;
  sample: Trivia = new Trivia();
  constructor(private _api: UserService) {
    _api.getRandomQuestions()
     .then((questions) => { this.sample = questions; })
    .catch((err) => { console.log(err); });
  }
  ngOnInit() {
    this.get_all();
  }
  get_all(){
    this._api.get_all_questions()
    .then((questions) => {
      this.allQuestions = questions;})
      .catch((err) => {console.log(err)});
    }
  }


