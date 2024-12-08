import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHouse,
  faTh,
  faUserGroup,
  faMapLocationDot,
  faGear,
  faBell,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  faHouse = faHouse;
  faTh = faTh;
  faUserGroup = faUserGroup;
  faMapLocationDot = faMapLocationDot;
  faGear = faGear;
  faBell = faBell;
}
