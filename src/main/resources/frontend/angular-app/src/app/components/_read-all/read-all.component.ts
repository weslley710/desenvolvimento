import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {

  list: Pessoa[] = [];

  constructor(private service: PessoaService, private router: Router) { }

  ngOnInit(): void {
	this.findAll();
  }
  
  findAll(): void {
	this.service.findAll().subscribe((listPessoa) => {
		this.list = listPessoa;
	})
  }
  
  delete(id: any): void {
	this.service.delete(id).subscribe((resposta) => {
		if (resposta === null) {
			this.service.message('Pessoa deletada com sucesso');
			this.findAll();
		}
	})
  }
  
  create(): void {
	this.router.navigate(['create-pessoa']);
  }

}
