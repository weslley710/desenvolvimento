import { Component } from '@angular/core';
import { navItems } from '../../_nav';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})

export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private authenticationService: AuthenticationService) { }

  logout() {
	this.authenticationService.logOut();
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
