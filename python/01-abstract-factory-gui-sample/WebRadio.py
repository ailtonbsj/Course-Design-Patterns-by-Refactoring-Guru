from IRadio import IRadio

class WebRadio(IRadio):
    name = ""
    label = ""

    def __init__(self, name, label) -> None:
        self.name = name
        self.label = label

    def paint(self):
                print('''
let divRd{name} = document.createElement('div');
let rd{name} = document.createElement('input');
rd{name}.setAttribute('type', 'radio');
let lbRd{name} = document.createTextNode('{label}');
divRd{name}.appendChild(rd{name});
divRd{name}.appendChild(lbRd{name});
document.body.appendChild(divRd{name});
'''.format(name=self.name, label=self.label))