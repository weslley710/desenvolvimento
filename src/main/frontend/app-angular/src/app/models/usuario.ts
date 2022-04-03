export interface Usuario {
	id?: number,
	nome: String,
	email: String,
	login: String,
	senha?: String,
	dataNascimento?: Date,
	dataCadastro?: Date,
	isAtivo?: Boolean
}
