from ICheckbox import ICheckbox

class WebCheckBox(ICheckbox):
    name = ""
    label = ""

    def __init__(self, name, label) -> None:
        self.name = name
        self.label = label

    def paint(self):
        print('''
        let div{name} = document.createElement('div');
        let ch{name} = document.createElement('input');
        ch{name}.setAttribute('type', 'checkbox');
        let lb{name} = document.createTextNode('label');
        div{name}.appendChild(ch{name});
        div{name}.appendChild(lb{name});
        '''.format(name=self.name.capitalize()))
