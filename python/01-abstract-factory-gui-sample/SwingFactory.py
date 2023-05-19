from IGUIFactory import IGUIFactory
from JRadio import JRadio
from JCheckbox import JCheckBox

class SwingFactory(IGUIFactory): 
    countRadio = 0
    countCheck = 0

    def createRadio(self, label):
        self.countRadio = self.countRadio + 1
        return JRadio(str(self.countRadio), label)

    def createCheckBox(self, label):
        self.countCheck = self.countCheck + 1
        return JCheckBox(str(self.countCheck), label)