from Button import Button

class HTMLButton(Button):
    btn = "let btn1 = document.createElement('button');\n"

    def render(self):
        print(self.btn)

    def onClick(self, f):
        if(f == "closeDialog"):
            self.btn = self.btn + "btn1.addEventListenet('click', ev => window.close())"