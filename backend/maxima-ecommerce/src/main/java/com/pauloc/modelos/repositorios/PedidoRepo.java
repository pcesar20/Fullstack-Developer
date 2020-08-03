package com.pauloc.modelos.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pauloc.modelos.entidades.Pedido;

public interface PedidoRepo extends JpaRepository<Pedido, Long>{

}
