package com.br.toysforme.resource;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.br.toysforme.domain.Usuario;
import com.br.toysforme.service.UsuarioService;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "api/usuarios")
public class UsuarioResource {
	
	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping(value = "/{id}")
	public @ResponseBody Usuario findById(@PathVariable Integer id) {
		
		Usuario usuario = usuarioService.findById(id);

		return usuario;
	}
	
	@GetMapping
	public @ResponseBody List<Usuario> findAll() {
		
		List<Usuario> usuarioList = usuarioService.findAll();
		
		return usuarioList;
	}
	
	@PostMapping
	public ResponseEntity<Usuario> save(@RequestBody Usuario usuario) {
		
		usuario = usuarioService.save(usuario);

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(usuario.getId()).toUri();
		
		return ResponseEntity.created(uri).body(usuario);
	}
	
	@DeleteMapping(value = "/{id}")
	public void delete(@PathVariable Integer id) {
		
		usuarioService.delete(id);
	}
	
	@PutMapping
	public ResponseEntity<Usuario> update(@RequestBody Usuario usuario) {
		
		Usuario novoUsuario = usuarioService.update(usuario);

		return ResponseEntity.ok().body(novoUsuario);
	}
}
