package br.ailtonbsj.designpattern;

public class Director {
	public void makeSUV(Builder builder) {
		builder.reset();
		builder.setSeats(4);
		builder.setEngine("V8 Engine");
	}
	
	public void makeSportsCar(Builder builder) {
		builder.reset();
		builder.setSeats(2);
		builder.setEngine("Sport Engine");
		builder.setTripComputer();
		builder.setGPS();
	}
}
