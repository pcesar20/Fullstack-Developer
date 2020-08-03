package com.pauloc.modelos.entidades;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tb_pedido")
public class Pedido implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private int numped;

	@Column(nullable = false)
	private int qntItens;

	@Column(nullable = false)
	private Double valorTotal;

	@Column(nullable = false)
	private Double valorFrete;

	@ManyToOne
	@JoinColumn(nullable = false)
	private Cliente cliente;

	public Pedido() {

	}

	public Pedido(Long id, int numped, int qntItens, Double valorTotal, Double valorFrete) {
		this.id = id;
		this.numped = numped;
		this.qntItens = qntItens;
		this.valorTotal = valorTotal;
		this.valorFrete = valorFrete;
	}

	public Long getId() {
		return id;
	}

	public int getNumped() {
		return numped;
	}

	public void setNumped(int numped) {
		this.numped = numped;
	}

	public int getQntItens() {
		return qntItens;
	}

	public void setQntItens(int i) {
		this.qntItens = i;
	}

	public Double getValorTotal() {
		return valorTotal;
	}

	public void setValorTotal(Double valorTotal) {
		this.valorTotal = valorTotal;
	}

	public Double getValorFrete() {
		return valorFrete;
	}

	public void setValorFrete(Double valorFrete) {
		this.valorFrete = valorFrete;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

}
