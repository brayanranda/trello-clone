import { Component, OnInit } from '@angular/core';
import { faTrello } from "@fortawesome/free-brands-svg-icons";
import { faBox, faWaveSquare, faClock, faAngleUp, faAngleDown, faHeart, faBorderAll, faUsers, faCog } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
})
export class BoardsComponent implements OnInit {

  faBox = faBox;
  faCog = faCog;
  faUsers = faUsers;
  faClock = faClock;
  faHeart = faHeart;
  faTrello = faTrello;
  faAngleUp = faAngleUp
  faBorderAll = faBorderAll;
  faAngleDown = faAngleDown;
  faWaveSquare = faWaveSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
