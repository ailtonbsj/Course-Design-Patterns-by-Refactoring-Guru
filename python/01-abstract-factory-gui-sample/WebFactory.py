from IGUIFactory import IGUIFactory
from WebRadio import WebRadio
from WebCheckBox import WebCheckBox

class WebFactory(IGUIFactory): 
    countRadio = 1
    countCheck = 1

    def createRadio(self, label):
        return WebRadio(str(self.countRadio), label)

    def createCheckBox(self, label):
        return WebCheckBox(str(self.countCheck), label)