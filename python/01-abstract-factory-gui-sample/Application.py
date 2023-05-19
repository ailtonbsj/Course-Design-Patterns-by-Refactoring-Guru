from SwingFactory import SwingFactory
from WebFactory import WebFactory

class Application:
    def __init__(self):
        print("/* Desktop enviroment */")
        jFact = SwingFactory()
        jFact.createRadio("Male").paint()
        jFact.createRadio("Female").paint()
        jFact.createCheckBox("Rice").paint()
        jFact.createCheckBox("Beans").paint()
        
        print("/* Web enviroment */")
        webFact = WebFactory()
        webFact.createRadio("Male").paint()
        webFact.createRadio("Female").paint()
        webFact.createCheckBox("Rice").paint()
        webFact.createCheckBox("Beans").paint()

app = Application()