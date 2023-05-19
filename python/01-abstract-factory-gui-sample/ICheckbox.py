from abc import ABCMeta, abstractmethod

class ICheckbox(metaclass=ABCMeta):
    @abstractmethod
    def paint(label) -> None:
        pass