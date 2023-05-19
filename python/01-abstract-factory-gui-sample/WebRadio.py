from IRadio import IRadio

class WebRadio(IRadio):
    name = ""
    label = ""

    def __init__(self, name, label) -> None:
        self.name = name
        self.label = label

    def paint(self):
        print("let div1 = document.createElement('div');")
        print("let ch1 = document.createElement('input');")
        print("ch1.setAttribute('type', 'radio');")
        print("let lb1 = document.createTextNode('label');")
        print("div1.appendChild(ch1);")
        print("div1.appendChild(lb1);")