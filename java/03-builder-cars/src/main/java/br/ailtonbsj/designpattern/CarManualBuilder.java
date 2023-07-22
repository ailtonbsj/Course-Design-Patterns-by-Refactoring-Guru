package br.ailtonbsj.designpattern;

public class CarManualBuilder implements Builder<Manual> {
	Manual manual;

	public Builder<Manual> reset() {
		manual = new Manual();
		return this;
	}

	public Builder<Manual> setSeats(int number) {
		manual.addText(String.format("Carro com %d assentos.\n", number));
		return this;
	}

	public Builder<Manual> setEngine(String engine) {
		manual.addText(String.format("Carro com motor %s\n", engine));
		return this;
	}

	public Builder<Manual> setTripComputer() {
		manual.addText("Instruções de computador de bordo.\n");
		return this;
	}
	
	public Builder<Manual> setGPS() {
		manual.addText("Instruções de GPS.\n");
		return this;
	}
	
	public Manual getResult() {
		return manual;
	}
}
