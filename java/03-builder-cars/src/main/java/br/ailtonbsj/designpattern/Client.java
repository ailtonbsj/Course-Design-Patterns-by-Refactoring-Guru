package br.ailtonbsj.designpattern;

public class Client {

	public static void main(String[] args) {
		Director<Car> director = new Director<>();
		CarBuilder builder = new CarBuilder();
		
		Car sport = director.makeSportsCar(builder).getResult();
		System.out.println(sport.toString());
		Car suv = director.makeSUV(builder).getResult();
		System.out.println(suv.toString());
		
		Director<Manual> directorManual = new Director<>();
		CarManualBuilder manualBuilder = new CarManualBuilder();
		
		Manual manualSport = directorManual.makeSportsCar(manualBuilder).getResult();
		System.out.println(manualSport.getText());
		Manual manualSUV = directorManual.makeSUV(manualBuilder).getResult();
		System.out.println(manualSUV.getText());
	}

}
