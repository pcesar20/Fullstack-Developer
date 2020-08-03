package com.pauloc.modelos.entidades;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tb_cliente")
public class Cliente implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private Long codigo;

	@Column(nullable = false)
	private String nome;

	public Cliente() {

	}

	public Cliente(Long id, Long codigo, String nome) {
		this.id = id;
		this.codigo = codigo;
		this.nome = nome;
	}

	public Long getId() {
		return id;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public Long getCodigo() {
		return codigo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

}
