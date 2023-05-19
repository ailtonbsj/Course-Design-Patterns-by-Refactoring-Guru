package br.ailtonbsj.factories;

import br.ailtonbsj.concreteproducts.VictorianChair;
import br.ailtonbsj.concreteproducts.VictorianCoffeeTable;
import br.ailtonbsj.concreteproducts.VictorianSofa;
import br.ailtonbsj.interfaceproducts.Chair;
import br.ailtonbsj.interfaceproducts.CoffeeTable;
import br.ailtonbsj.interfaceproducts.Sofa;

public class VictorianFurnitureFactory implements FurnitureFactory {

	@Override
	public Chair createChair() {
		return new VictorianChair();
	}

	@Override
	public CoffeeTable createCoffeeTable() {
		return new VictorianCoffeeTable();
	}

	@Override
	public Sofa createSofa() {
		return new VictorianSofa();
	}

}
