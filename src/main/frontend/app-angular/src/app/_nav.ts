import { Injectable } from '@angular/core';

import { INavData } from '@coreui/angular';

import { AuthenticationService } from '../app/services/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class NavData {
	
	constructor(private authService: AuthenticationService) { }

    nav: INavData = {
		name: '',
		url: '',
		icon: '',
		attributes: [],
		children: []
    }

	navItems: INavData[] = [];
    
    getNavItens() :INavData[] {
	
		this.navItems.push(this.menuDashboard());
		this.navItems.push(this.menuAdmin());
	
		return this.navItems;
	}
	
	menuDashboard() :INavData {
		
		const nav: INavData = {};

		nav.name = 'Dashboard';
		nav.url = '/dashboard';
		nav.icon = 'icon-speedometer';

		return nav;
	}
	
	menuAdmin() :INavData {
		
		const nav: INavData = {};
		
		nav.name = 'Admin';
		nav.url = '/admin';
		nav.icon = 'icon-puzzle';
		
		// Submenu
		nav.children = [];
		nav.children.push(this.menuAdminUsuario());
		nav.children.push(this.menuAdminFuncao());

		if (!this.authService.roleMatch(['ADMIN'])) {		
			nav.attributes = { hidden: true };

			return nav;
		} else {
			return nav;	
		}
	}
	
	menuAdminUsuario() :INavData {
		
		const nav: INavData = {};
		
		nav.name = 'Usuários';
		nav.url = '/admin/usuario';
		nav.icon = 'icon-puzzle';
		
		if (!this.authService.roleMatch(['ADMIN'])) {		
			nav.attributes = { hidden: true };

			return nav;
		} else {
			return nav;	
		}
	}
	
	menuAdminFuncao() :INavData {
		
		const nav: INavData = {};
		
		nav.name = 'Funções';
		nav.url = '/admin/funcao';
		nav.icon = 'icon-puzzle';
		
		if (!this.authService.roleMatch(['ADMIN'])) {		
			nav.attributes = { hidden: true };

			return nav;
		} else {
			return nav;	
		}
	}
}