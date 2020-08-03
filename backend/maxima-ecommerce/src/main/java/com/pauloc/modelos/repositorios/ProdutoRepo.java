package com.pauloc.modelos.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pauloc.modelos.entidades.Produto;

public interface ProdutoRepo extends JpaRepository<Produto, Long>{

}
