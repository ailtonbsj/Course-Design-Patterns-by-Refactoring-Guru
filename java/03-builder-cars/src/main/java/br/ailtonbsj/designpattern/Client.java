package br.ailtonbsj.designpattern;

public class Client {

	public static void main(String[] args) {
		Director director = new Director();
		
		CarBuilder builder = new CarBuilder();
		
		director.makeSportsCar(builder);
		Car sport = builder.getResult();
		System.out.println(sport.toString());
		
		director.makeSUV(builder);
		Car suv = builder.getResult();
		System.out.println(suv.toString());
		
		CarManualBuilder manualBuilder = new CarManualBuilder();
		
		director.makeSportsCar(manualBuilder);
		Manual manualSport = manualBuilder.getResult();
		System.out.println(manualSport.getText());
		
		director.makeSUV(manualBuilder);
		Manual manualSUV = manualBuilder.getResult();
		System.out.println(manualSUV.getText());
	}

}
