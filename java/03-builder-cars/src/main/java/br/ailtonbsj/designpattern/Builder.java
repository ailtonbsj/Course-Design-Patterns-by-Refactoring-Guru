package br.ailtonbsj.designpattern;

public interface Builder<T> {
	Builder<T> reset();
	Builder<T> setSeats(int number);
	Builder<T> setEngine(String engine);
	Builder<T> setTripComputer();
	Builder<T> setGPS();
	T getResult();
}
