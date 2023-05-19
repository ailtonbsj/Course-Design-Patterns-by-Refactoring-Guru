package br.ailtonbsj.concreteproducts;

import br.ailtonbsj.interfaceproducts.Chair;

public class ModernChair implements Chair {

	@Override
	public boolean hasLegs() {
		return false;
	}

	@Override
	public void sitOn() {
		System.out.println("Sit on with confort!");
	}

}
