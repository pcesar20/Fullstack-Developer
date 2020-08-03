package com.pauloc.modelos.entidades;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_produto")
public class Produto implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(nullable = false)
	private long codigo;

	@Column(nullable = false)
	private String nome;

	@Column(nullable = false)
	private Double precoUnit;

	private String imgUrl;

	public Produto() {

	}

	public Produto(Long id, long codigo, String nome, Double precoUnit, String imgUrl) {
		this.id = id;
		this.codigo = codigo;
		this.nome = nome;
		this.precoUnit = precoUnit;
		this.imgUrl = imgUrl;
	}

	public Long getId() {
		return id;
	}

	public long getCodigo() {
		return codigo;
	}

	public void setCodigo(long codigo) {
		this.codigo = codigo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Double getPrecoUnit() {
		return precoUnit;
	}

	public void setPrecoUnit(Double precoUnit) {
		this.precoUnit = precoUnit;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

}
