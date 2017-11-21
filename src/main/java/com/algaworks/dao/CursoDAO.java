package com.algaworks.dao;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.algaworks.model.Curso;

public interface CursoDAO extends JpaRepository<Curso, Integer> {
	
	Curso findByNome(String nome);
	
	List<Curso> findByNomeStartingWith(String nome);
	//ORDENANDO PELO NOME//
	List<Curso> findByNomeStartingWithOrderByNome(String nome);
	
	@Query("from Curso where nome like concat(?1, '%')")
	List<Curso> buscarCurso(String nome);
    
}
