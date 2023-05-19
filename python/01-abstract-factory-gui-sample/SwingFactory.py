from IGUIFactory import IGUIFactory
from JRadio import JRadio
from JCheckbox import JCheckBox

class SwingFactory(IGUIFactory): 
    countRadio = 1
    countCheck = 1

    def createRadio(self, label):
        return JRadio(str(self.countRadio), label)

    def createCheckBox(self, label):
        return JCheckBox(str(self.countCheck), label)