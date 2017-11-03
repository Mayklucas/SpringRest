package com.algaworks.model.resource;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.algaworks.dao.CursoDAO;
import com.algaworks.model.Curso;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CursoResource {
 
  CursoDAO dao = new CursoDAO();

  @RequestMapping(value = "/cursosListar", method = RequestMethod.GET)
  public ResponseEntity<List<Curso>> listar() {
    return new ResponseEntity<List<Curso>>(dao.listar(Curso.class), HttpStatus.OK);
  }
  
  
  @RequestMapping(value = "/cursos/{id}", method = RequestMethod.GET)
  public ResponseEntity<Curso> buscar(@PathVariable("id") Integer id) throws Exception {
    Curso curso = dao.listarPorId(Curso.class, id);
   
    if (curso == null) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
   
    return new ResponseEntity<Curso>(curso, HttpStatus.OK);
  }
  
  @RequestMapping(value = "/cursosAdicionar/{nome}/{duracao}", method = RequestMethod.GET)
  public ResponseEntity<List<Curso>> Adicionar(@PathVariable("nome") String nome, 
		  @PathVariable("duracao") String duracao){
	Curso curso = new Curso();
	curso.setNome(nome);
	curso.setDuracao(duracao);
	dao.salvar(curso);
	
	return new ResponseEntity<List<Curso>>(new ArrayList<Curso>(dao.listar(Curso.class)), HttpStatus.OK);
	
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
  
 @RequestMapping(value = "/cursosAlterar/{id}/{nome}/{duracao}", method = RequestMethod.PUT)
  public ResponseEntity<List<Curso>> alterar(@PathVariable("id") Integer id ,@PathVariable("nome") String nome,
		  @PathVariable("duracao") String duracao) throws Exception {
	Curso curso = dao.listarPorId(Curso.class, id);
	curso.setNome(nome);
	curso.setDuracao(duracao);
	dao.alterar(curso);
	
	return new ResponseEntity<List<Curso>>(new ArrayList<Curso>(dao.listar(Curso.class)), HttpStatus.OK);
  }
}
 
