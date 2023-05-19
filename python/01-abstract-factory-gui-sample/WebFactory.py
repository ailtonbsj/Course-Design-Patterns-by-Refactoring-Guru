from IGUIFactory import IGUIFactory
from WebRadio import WebRadio
from WebCheckBox import WebCheckBox

class WebFactory(IGUIFactory): 
    countRadio = 1
    countCheck = 1

    def createRadio(self, label):
        self.countRadio = self.countRadio + 1
        return WebRadio(str(self.countRadio), label)

    def createCheckBox(self, label):
        self.countCheck = self.countCheck + 1
        return WebCheckBox(str(self.countCheck), label)