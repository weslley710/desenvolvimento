import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';

import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NotificationService } from '../../../services/notification.service'

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.scss']
})
export class UsuarioCadastroComponent implements OnInit {

  usuario: Usuario = {
	nome: '',
	email: '',
	login: '',
	senha: '',
	isAtivo: true,
	dataNascimento: null
  }

  id: number; // id do usuario
  state: string = 'cadastrar';

  constructor(private route: ActivatedRoute, private router: Router, private usuarioService: UsuarioService, private notificationService: NotificationService) { }

  ngOnInit(): void {
	this.route.params.subscribe((params: Params) => {
		this.id = params['id'];

		if (this.id != undefined && this.id != 0) {
			this.carregarEditar();
			this.state = 'editar';
		}
	})
  }
  
  salvar(): void {
	this.usuarioService.save(this.usuario).subscribe((usuario) => {
		this.notificationService.success('Usuário salvo com sucesso');
		this.router.navigate(['admin/usuario']);
	}, err => {
		this.notificationService.warn('Falha ao salvar o usuário');
	})
  }
  
  atualizar(): void {
	this.usuarioService.update(this.usuario).subscribe((usuario) => {
		this.notificationService.success('Usuário atualizado com sucesso');
		this.router.navigate(['admin/usuario']);
	}, err => {
		this.notificationService.warn('Falha ao atualizar o usuário');
	})
  }
  
  carregarEditar(): void {
	this.usuarioService.findById(this.id).subscribe((usuario) => {
		this.usuario = usuario;
	})
  }
  
  cancelar(): void {
	this.router.navigate(['admin/usuario']);
  }
}
