package br.ailtonbsj.factories;

import br.ailtonbsj.interfaceproducts.Chair;
import br.ailtonbsj.interfaceproducts.CoffeeTable;
import br.ailtonbsj.interfaceproducts.Sofa;

public interface FurnitureFactory {
	Chair createChair();
	CoffeeTable createCoffeeTable();
	Sofa createSofa();
}
