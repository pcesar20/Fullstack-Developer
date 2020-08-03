package com.pauloc.servicos;

import java.util.Random;

import org.springframework.stereotype.Service;

@Service
public class CalcFreteServico {
	static int valorMin = 5;
	static int valorMax = 10;

	Random rand = new Random();
	
	public int valorFrete(int totalItens) {
		int totalFrete = rand.nextInt(15) * totalItens;
		return totalFrete;
		
		
	}
	
}
