from abc import ABC, abstractmethod
from Button import Button

class Dialog(ABC): 
    @abstractmethod
    def createButton(self):
        return Button()

    def render(self):
        okButton = self.createButton()
        okButton.onClick("closeDialog")
        okButton.render()