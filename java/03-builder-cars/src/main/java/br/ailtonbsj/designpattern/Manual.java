package br.ailtonbsj.designpattern;

public class Manual {
	private String text;
	
	public Manual() {
		text = "MANUAL\n\n";
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}
	
	public void addText(String text) {
		this.text += text;
	}
}
