package com.br.toysforme.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.toysforme.domain.Funcao;
import com.br.toysforme.repository.FuncaoRepository;
import com.br.toysforme.service.exception.ObjectNotFoundException;

@Service
public class FuncaoService {
	
	@Autowired
	private FuncaoRepository funcaoRepository;
	
	public Funcao findById(Integer id) {
		
		Optional<Funcao> funcao = funcaoRepository.findById(id);

		return funcao.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado! Id: " + id + ", Tipo: " + Funcao.class.getName()));
	}
	
	public List<Funcao> findAll() {
		
		List<Funcao> funcaoList = funcaoRepository.findAll();

		return funcaoList;
	}

	public Funcao save(Funcao funcao) {

		return funcaoRepository.save(funcao);
	}

	public void delete(Integer id) {

		funcaoRepository.deleteById(id);
	}

	public Funcao update(Funcao funcao) {

		return funcaoRepository.save(funcao);
	}
}
