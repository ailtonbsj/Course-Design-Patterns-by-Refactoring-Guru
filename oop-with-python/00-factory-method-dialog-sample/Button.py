from abc import ABCMeta, abstractmethod

class Button():
    __metaclass__ = ABCMeta

    @abstractmethod
    def render():
        pass

    @abstractmethod
    def onClick(f):
        pass