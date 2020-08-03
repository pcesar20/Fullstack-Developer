package com.pauloc.modelos.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pauloc.modelos.entidades.Cliente;

public interface ClienteRepo extends JpaRepository<Cliente, Long>{

}
