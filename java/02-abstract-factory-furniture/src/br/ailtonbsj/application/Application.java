package br.ailtonbsj.application;

import br.ailtonbsj.factories.ModernFurnitureFactory;
import br.ailtonbsj.factories.VictorianFurnitureFactory;
import br.ailtonbsj.interfaceproducts.Chair;

public class Application {

	public static void main(String[] args) {
		ModernFurnitureFactory modern = new ModernFurnitureFactory();
		Chair chair1 = modern.createChair();
		System.out.println("Modern chair has legs ? " + chair1.hasLegs());
		chair1.sitOn();
		
		VictorianFurnitureFactory victorian = new VictorianFurnitureFactory();
		Chair chair2 = victorian.createChair();
		System.out.println("Victorian chair has legs ? " + chair2.hasLegs());
		chair2.sitOn();
	}

}
