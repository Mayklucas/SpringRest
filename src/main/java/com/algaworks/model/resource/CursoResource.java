package com.algaworks.model.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.algaworks.dao.CursoDAO;
import com.algaworks.model.Curso;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping
public class CursoResource {
 
  @Autowired
  private CursoDAO dao;

  @GetMapping
  public List<Curso> listar() {
	  return dao.findAll();
  }
  
  @GetMapping("/{nome}")
  public List<Curso> buscar (@PathVariable String nome) {
	  return dao.BuscarCurso(nome);
	  }
  
  @PostMapping
  public List<Curso> adicionar (@RequestBody Curso curso) {
	  dao.save(curso);
	  return dao.findAll();
  }
  
  @DeleteMapping("/{id}")
  public List<Curso> excluir (@PathVariable Integer id) {
	  dao.delete(id);
	  return dao.findAll();
  }
  
  @PutMapping
  public List<Curso> alterar (@RequestBody Curso curso) {
	  dao.saveAndFlush(curso);
	  return dao.findAll();
  }
 
}
 
