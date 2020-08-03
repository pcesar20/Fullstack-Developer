package com.pauloc.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.pauloc.modelos.entidades.Cliente;
import com.pauloc.modelos.entidades.Pedido;
import com.pauloc.modelos.entidades.Produto;
import com.pauloc.modelos.repositorios.ClienteRepo;
import com.pauloc.modelos.repositorios.PedidoRepo;
import com.pauloc.modelos.repositorios.ProdutoRepo;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {

	@Autowired
	private ClienteRepo clienterepo;

	@Autowired
	private ProdutoRepo produtorepo;

	@Autowired
	private PedidoRepo pedidorepo;

	@Override
	public void run(String... args) throws Exception {
		Cliente c1 = new Cliente(null, 1L, "Paulo César");

		Produto p1 = new Produto(null, 35L, "Monitor Widescreen LCD LED 18.5” AOC HD E970SWNL", 444.9, "");

	//	Pedido ped1 = new Pedido(null, 1, 3, 100.00, 20.00);

		clienterepo.saveAll(Arrays.asList(c1));
		produtorepo.saveAll(Arrays.asList(p1));
		//pedidorepo.saveAll(Arrays.asList(ped1));
	}

}
