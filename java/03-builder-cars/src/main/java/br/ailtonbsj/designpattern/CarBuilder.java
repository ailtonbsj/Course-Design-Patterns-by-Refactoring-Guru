package br.ailtonbsj.designpattern;

public class CarBuilder implements Builder {
	Car car;

	public void reset() {
		car = new Car();
	}

	public void setSeats(int number) {
		car.setSeats(number);
	}

	public void setEngine(String engine) {
		car.setEngine(engine);
	}

	public void setTripComputer() {
		car.setTripComputer("Trip computer installed!");
	}

	public void setGPS() {
		car.setGps("GPS installed!");
	}
	
	public Car getResult() {
		return car;
	}
}
