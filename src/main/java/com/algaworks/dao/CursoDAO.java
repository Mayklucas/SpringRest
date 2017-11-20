package com.algaworks.dao;


import org.springframework.data.jpa.repository.JpaRepository;

import com.algaworks.model.Curso;

public interface CursoDAO extends JpaRepository<Curso, Integer> {
    
}
