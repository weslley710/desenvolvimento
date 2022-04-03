import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from '../../modules/app-material/app-material.module';

import { AdminRoutingModule } from './admin-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';

@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioCadastroComponent
  ],
  imports: [
	FormsModule,
    CommonModule,
    AdminRoutingModule,
    AppMaterialModule
  ]
})

export class AdminModule { }