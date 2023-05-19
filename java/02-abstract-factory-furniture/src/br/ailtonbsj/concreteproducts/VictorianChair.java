package br.ailtonbsj.concreteproducts;

import br.ailtonbsj.interfaceproducts.Chair;

public class VictorianChair implements Chair {

	@Override
	public boolean hasLegs() {
		return true;
	}

	@Override
	public void sitOn() {
		System.out.println("Too old to sit down. It can break!");
	}

}
