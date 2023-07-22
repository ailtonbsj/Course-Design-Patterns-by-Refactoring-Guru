package br.ailtonbsj.designpattern;

public class CarBuilder implements Builder<Car> {
	Car car;

	public Builder<Car> reset() {
		car = new Car();
		return this;
	}

	public Builder<Car> setSeats(int number) {
		car.setSeats(number);
		return this;
	}

	public Builder<Car> setEngine(String engine) {
		car.setEngine(engine);
		return this;
	}

	public Builder<Car> setTripComputer() {
		car.setTripComputer("Trip computer installed!");
		return this;
	}

	public Builder<Car> setGPS() {
		car.setGps("GPS installed!");
		return this;
	}
	
	public Car getResult() {
		return car;
	}
}
