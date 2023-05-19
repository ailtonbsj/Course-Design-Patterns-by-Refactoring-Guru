package br.ailtonbsj.factories;

import br.ailtonbsj.concreteproducts.ModernChair;
import br.ailtonbsj.concreteproducts.ModernCoffeeTable;
import br.ailtonbsj.concreteproducts.ModernSofa;
import br.ailtonbsj.interfaceproducts.Chair;
import br.ailtonbsj.interfaceproducts.CoffeeTable;
import br.ailtonbsj.interfaceproducts.Sofa;

public class ModernFurnitureFactory implements FurnitureFactory {

	@Override
	public Chair createChair() {
		return new ModernChair();
	}

	@Override
	public CoffeeTable createCoffeeTable() {
		return new ModernCoffeeTable();
	}

	@Override
	public Sofa createSofa() {
		return new ModernSofa();
	}

}
