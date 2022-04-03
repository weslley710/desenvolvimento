package com.br.toysforme.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.br.toysforme.domain.Usuario;
import com.br.toysforme.repository.UsuarioRepository;
import com.br.toysforme.service.exception.ObjectNotFoundException;

@Service
public class UsuarioService implements UserDetailsService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private PasswordEncoder bcryptEncoder;
	
	public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
		
		// buscar apenas usuarios ativos
		Usuario usuario = usuarioRepository.findByLoginAndIsAtivo(login, true); 
		
		if (usuario != null) {
			return new User(usuario.getLogin(), usuario.getSenha(),	new ArrayList<>());
		} else {
			throw new UsernameNotFoundException("Usuário não foi encontrado ou não está ativo");
		}
	}
	
	public Usuario findByLogin(String login) {
		
		Usuario usuario = usuarioRepository.findByLoginAndIsAtivo(login, true);

		return usuario;
	}
	
	public Usuario findById(Integer id) {
		
		Optional<Usuario> usuario = usuarioRepository.findById(id);

		return usuario.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado! Id: " + id + ", Tipo: " + Usuario.class.getName()));
	}
	
	public List<Usuario> findAll() {
		
		List<Usuario> usuarioList = usuarioRepository.findAllByOrderByDataCadastroDesc();

		return usuarioList;
	}

	public Usuario save(Usuario usuario) {
		
		// Cryptografando a senha
		usuario.setSenha(bcryptEncoder.encode(usuario.getSenha()));
		usuario.setDataCadastro(LocalDateTime.now());
		usuario.setIsAtivo(true);
		
		return usuarioRepository.save(usuario);
	}

	public void delete(Integer id) {
		
		usuarioRepository.deleteById(id);
	}

	public Usuario update(Usuario usuario) {
		
		Usuario newUsuario = findById(usuario.getId());
		newUsuario.setNome(usuario.getNome());
		newUsuario.setDataNascimento(usuario.getDataNascimento());
		newUsuario.setLogin(usuario.getLogin());
		newUsuario.setEmail(usuario.getEmail());
		newUsuario.setIsAtivo(usuario.getIsAtivo());

		return usuarioRepository.save(newUsuario);
	}
}
