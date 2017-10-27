package com.algaworks.model.resource;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.algaworks.dao.CursoDAO;
import com.algaworks.model.Curso;

@RestController
public class CursoResource {
 
  CursoDAO dao = new CursoDAO();

  @RequestMapping(value = "/cursosListar", method = RequestMethod.GET)
  public ResponseEntity<List<Curso>> listar() {
    return new ResponseEntity<List<Curso>>(dao.listar(Curso.class), HttpStatus.OK);
  }
  
  
  @RequestMapping(value = "/cursosPorId/{id}", method = RequestMethod.GET)
  public ResponseEntity<Curso> buscar(@PathVariable("id") Integer id) throws Exception {
    Curso curso = dao.listarPorId(Curso.class, id);
   
    if (curso == null) {
      return new ResponseEntity<Curso>(HttpStatus.NOT_FOUND);
    }
   
    return new ResponseEntity<Curso>(curso, HttpStatus.OK);
  }

  @RequestMapping(value = "/cursosDelete/{id}", method = RequestMethod.DELETE)
  public ResponseEntity<?> deletar(@PathVariable("id") int id) throws Exception {
    Curso curso = dao.listarPorId(Curso.class, id);
    dao.excluir(curso);
    
    if (curso == null) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
   
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
  
  @RequestMapping(value = "/cursosAlterar/{id}", method = RequestMethod.GET)
  public ResponseEntity<Curso> alterar(@PathVariable("id") Integer id ,@PathVariable("nome") String nome,
		  @PathVariable("duracao") String duracao) throws Exception {
	Curso curso = dao.listarPorId(Curso.class, id);
	dao.alterar(curso);
	
	 if (curso == null) {
	      return new ResponseEntity<Curso>(HttpStatus.NOT_FOUND);
	    }
	   
	    return new ResponseEntity<Curso>(curso, HttpStatus.OK);
	  }
  }
 
