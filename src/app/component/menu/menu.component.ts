import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
isMenu : boolean = false;
  constructor() {
    this.isMenu = !!localStorage.getItem("auth");
   }

  ngOnInit(): void {
   
  }

}
