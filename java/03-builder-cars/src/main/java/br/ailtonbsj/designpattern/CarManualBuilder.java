package br.ailtonbsj.designpattern;

public class CarManualBuilder implements Builder {
	Manual manual;

	public void reset() {
		manual = new Manual();
	}

	public void setSeats(int number) {
		manual.addText(String.format("Carro com %d assentos.\n", number));
	}

	public void setEngine(String engine) {
		manual.addText(String.format("Carro com motor %s\n", engine));
	}

	public void setTripComputer() {
		manual.addText("Instruções de computador de bordo.\n");
	}
	
	public void setGPS() {
		manual.addText("Instruções de GPS.\n");
	}
	
	public Manual getResult() {
		return manual;
	}
}
