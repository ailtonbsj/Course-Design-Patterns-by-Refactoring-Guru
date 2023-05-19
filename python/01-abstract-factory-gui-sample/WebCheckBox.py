from ICheckbox import ICheckbox

class WebCheckBox(ICheckbox):
    name = ""
    label = ""

    def __init__(self, name, label) -> None:
        self.name = name
        self.label = label

    def paint(self):
        print('''
let divCh{name} = document.createElement('div');
let ch{name} = document.createElement('input');
ch{name}.setAttribute('type', 'checkbox');
let lbCh{name} = document.createTextNode('{label}');
divCh{name}.appendChild(ch{name});
divCh{name}.appendChild(lbCh{name});
document.body.appendChild(divCh{name});
'''.format(name=self.name, label=self.label))
