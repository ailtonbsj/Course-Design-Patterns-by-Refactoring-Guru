package br.ailtonbsj.designpattern;

public class Director<T> {
	public Builder<T> makeSUV(Builder<T> builder) {
		return builder.reset().setSeats(4).setEngine("V8 Engine");
	}

	public Builder<T> makeSportsCar(Builder<T> builder) {
		return builder.reset().setSeats(2).setEngine("Sport Engine").setTripComputer().setGPS();
	}
}
