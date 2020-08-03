package com.pauloc.servicos;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pauloc.modelos.entidades.Produto;
import com.pauloc.modelos.repositorios.ProdutoRepo;
import com.pauloc.servicos.exception.ResourceNotFoundException;

@Service
public class ProdutoServico {

	@Autowired
	private ProdutoRepo repository;

	public List<Produto> findAll() {
		return repository.findAll();
	}

	public Produto findById(Long id) {
		Optional<Produto> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoundException(id));
	}

	public Produto insert(Produto obj) {
		return repository.save(obj);
	}

	public void delete(Long id) {
		repository.deleteById(id);
	}

	public Produto update(Long id, Produto obj) {
		Produto entity = repository.getOne(id);
		updateData(entity, obj);
		return repository.save(entity);
	}

	private void updateData(Produto entity, Produto obj) {
		entity.setCodigo(obj.getCodigo());
		entity.setNome(obj.getNome());
		entity.setPrecoUnit(obj.getPrecoUnit());
		entity.setImgUrl(obj.getImgUrl());

	}
}
