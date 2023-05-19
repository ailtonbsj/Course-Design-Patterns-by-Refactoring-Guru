from abc import ABCMeta, abstractmethod

class IRadio(metaclass=ABCMeta):
    @abstractmethod
    def paint(label) -> None:
        pass