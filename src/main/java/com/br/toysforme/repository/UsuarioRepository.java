package com.br.toysforme.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.br.toysforme.domain.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

	Usuario findByLoginAndIsAtivo(String login, Boolean isAtivo);
	List<Usuario> findAllByOrderByDataCadastroDesc();
}
