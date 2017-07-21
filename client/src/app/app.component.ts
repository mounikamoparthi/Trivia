import { Component } from '@angular/core';
import {User} from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trivia Game';
  askname(){
    let name = prompt("Please enter your name?", "");
  }
}
