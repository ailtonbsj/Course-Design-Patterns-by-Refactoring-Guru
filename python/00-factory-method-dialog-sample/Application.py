from SwingDialog import SwingDialog
from WebDialog import WebDialog

class Application:
    def __init__(self):
        print("/* Desktop enviroment */")
        dialog = SwingDialog()
        dialog.render()
        
        print("/* Web enviroment */")
        dialog = WebDialog()
        dialog.render()

app = Application()