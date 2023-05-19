from IRadio import IRadio

class JRadio(IRadio):
    name = ""
    label = ""

    def __init__(self, name, label) -> None:
        self.name = name
        self.label = label

    def paint(self):
        print("JRadioButton rd" + self.name + " = new JRadioButton(\"" + self.label + "\");")