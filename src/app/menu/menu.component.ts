import { Component, OnInit } from '@angular/core';
import { userLogin } from '../model/userLogin';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userLogin: userLogin = new userLogin

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

}
