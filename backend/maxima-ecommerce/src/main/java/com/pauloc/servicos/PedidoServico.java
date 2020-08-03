package com.pauloc.servicos;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pauloc.modelos.entidades.Pedido;
import com.pauloc.modelos.repositorios.PedidoRepo;
import com.pauloc.servicos.exception.ResourceNotFoundException;

@Service
public class PedidoServico {
	
	@Autowired
	private PedidoRepo repository;
	
	public List<Pedido> findAll(){
		return repository.findAll();
	}
	
	public Pedido findById(Long id) {
		Optional<Pedido> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoundException(id));
	}
	
	public Pedido insert(Pedido obj) {
		return repository.save(obj);
	}
	
	public void delete(Long id) {
		repository.deleteById(id);
	}
	
	public Pedido update(Long id, Pedido obj) {
		Pedido entity = repository.getOne(id);
		updateData(entity, obj);
		return repository.save(entity);
	}
	
	private void updateData(Pedido entity, Pedido obj) {
		entity.setNumped(obj.getNumped());
		entity.setQntItens(obj.getQntItens());
		entity.setValorFrete(obj.getValorFrete());
		entity.setValorTotal(obj.getValorTotal());
		entity.setCliente(obj.getCliente());
	}
}
