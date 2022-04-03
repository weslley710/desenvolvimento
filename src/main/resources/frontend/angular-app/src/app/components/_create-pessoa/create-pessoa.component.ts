import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-create-pessoa',
  templateUrl: './create-pessoa.component.html',
  styleUrls: ['./create-pessoa.component.css']
})
export class CreatePessoaComponent implements OnInit {

  pessoa: Pessoa = {
	nome: '',
	dataNascimento: new Date()
  }

  constructor(private router: Router, private service: PessoaService) { }

  ngOnInit(): void {
  }
  
  create(): void {
	this.service.create(this.pessoa).subscribe((pessoa) => {
		this.service.message("Pessoa criada com sucesso");
		this.router.navigate(['']);	
	}, err => {
		this.service.message("Falha ao criar a pessoa");
	})
  }

  cancel(): void {
	this.router.navigate(['']);
  }

}
