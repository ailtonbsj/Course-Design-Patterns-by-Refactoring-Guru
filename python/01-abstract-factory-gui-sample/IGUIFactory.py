from abc import ABCMeta, abstractmethod
from IRadio import IRadio
from ICheckbox import ICheckbox

class IGUIFactory(metaclass=ABCMeta):
    @abstractmethod
    def createRadio() -> IRadio:
        pass
    
    @abstractmethod
    def createCheckBox() -> ICheckbox:
        pass