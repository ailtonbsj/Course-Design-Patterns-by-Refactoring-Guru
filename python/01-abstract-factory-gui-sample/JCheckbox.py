from ICheckbox import ICheckbox

class JCheckBox(ICheckbox):
    name = ""
    label = ""

    def __init__(self, name, label) -> None:
        self.name = name
        self.label = label

    def paint(self):
        print("JCheckBox "+ self.name +" = new JCheckBox(\"" + self.label + "\");")