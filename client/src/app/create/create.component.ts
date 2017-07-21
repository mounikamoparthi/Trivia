import { Component, OnInit } from '@angular/core';
import { Trivia } from './../trivia';
import { UserService } from './../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  new_question = new Trivia();
  constructor(private _api: UserService, private _router: Router) { }

  ngOnInit() {
  }
  addQuestion(){
    this._api.create(this.new_question)
    .then(() => {this._router.navigate(['/question/list'])})
    .catch((err) => {console.log(err)});
  }
}
