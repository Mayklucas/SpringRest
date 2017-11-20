package com.algaworks.model.resource;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
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
  
  
  @RequestMapping(value = "/buscarCursos/{nome}", method = RequestMethod.GET)
  public ResponseEntity<List<Curso>> buscar(@PathVariable("nome") String nome) throws Exception {
	List<Curso> listarnome = dao.listarIdPorNome("Curso", nome);
	
	if(listarnome == null) {
		return new ResponseEntity<List<Curso>>(HttpStatus.NOT_FOUND);		
	} else {
		return new ResponseEntity<List<Curso>>(new ArrayList<Curso>(listarnome), HttpStatus.OK);	
	}
    
  }
  
  @PostMapping("/{nome}/{duracao}")
  public List<Curso> adicionar (@RequestBody Curso curso) {
	  dao.save(curso);
	  return dao.findAll();
  }

  @RequestMapping(value = "/cursosDelete/{id}", method = RequestMethod.DELETE)
  public ResponseEntity<?> deletar(@PathVariable("id") int id) throws Exception {
    Curso curso = dao.listarPorId(Curso.class, id);
    dao.excluir(curso);
    
    return new ResponseEntity<List<Curso>>(new ArrayList<Curso>(dao.listar(Curso.class)), HttpStatus.OK);
    
  }
  
 @RequestMapping(value = "/cursosAlterar/", method = RequestMethod.PUT)
 @ResponseBody
  public ResponseEntity<List<Curso>> alterar(@RequestBody Curso curso) throws Exception{
	Curso cursoAt = dao.listarPorId(Curso.class, curso.getId());
	cursoAt.setNome(curso.getNome());
	cursoAt.setDuracao(curso.getDuracao());
	dao.alterar(curso);
	
	return new ResponseEntity<List<Curso>>(new ArrayList<Curso>(dao.listar(Curso.class)), HttpStatus.OK);
  }
}
 
