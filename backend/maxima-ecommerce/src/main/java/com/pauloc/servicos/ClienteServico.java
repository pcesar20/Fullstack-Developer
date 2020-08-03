package com.pauloc.servicos;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pauloc.modelos.entidades.Cliente;
import com.pauloc.modelos.repositorios.ClienteRepo;
import com.pauloc.servicos.exception.ResourceNotFoundException;

@Service
public class ClienteServico {
	
	@Autowired
	private ClienteRepo repository;
	
	public List<Cliente> findAll(){
		return repository.findAll();
	}
	
	public Cliente findById(Long id) {
		Optional<Cliente> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoundException(id));
	}
	
	public Cliente insert(Cliente obj) {
		return repository.save(obj);
	}
	
	public void delete(Long id) {
		repository.deleteById(id);
	}
	
	public Cliente update(Long id, Cliente obj) {
		Cliente entity = repository.getOne(id);
		updateData(entity, obj);
		return repository.save(entity);
	}
	
	private void updateData(Cliente entity, Cliente obj) {
		entity.setNome(obj.getNome());
		entity.setCodigo(obj.getCodigo());
	}
}
