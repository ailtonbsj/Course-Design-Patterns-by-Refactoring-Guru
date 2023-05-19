from Dialog import Dialog
from HTMLButton import HTMLButton

class WebDialog(Dialog):
    def createButton(self):
        return HTMLButton()