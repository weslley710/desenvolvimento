import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FuncaoCadastroComponent } from './funcao-cadastro/funcao-cadastro.component';
import { FuncaoComponent } from './funcao/funcao.component';

const routes: Routes = [
	{
		path: '',
    	data: {
      		title: 'Admin'
    	},
    	children: [
      		{
        		path: 'usuario',
		        component: UsuarioComponent,
		        data: {
		        	title: 'Usuários'
        		}
      		},
      		{
        		path: 'usuario-cadastro',
		        component: UsuarioCadastroComponent,
		        data: {
		        	title: 'Cadastrar Usuário'
        		}
      		},
      		{
        		path: 'usuario-cadastro/:id',
		        component: UsuarioCadastroComponent,
		        data: {
		        	title: 'Editar Usuário'
        		}
      		},
      		{
        		path: 'funcao',
		        component: FuncaoComponent,
		        data: {
		        	title: 'Funções'
        		}
      		},
      		{
        		path: 'funcao-cadastro',
		        component: FuncaoCadastroComponent,
		        data: {
		        	title: 'Cadastrar Função'
        		}
      		},
      		{
        		path: 'funcao-cadastro/:id',
		        component: FuncaoCadastroComponent,
		        data: {
		        	title: 'Editar Função'
        		}
      		}
  		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
