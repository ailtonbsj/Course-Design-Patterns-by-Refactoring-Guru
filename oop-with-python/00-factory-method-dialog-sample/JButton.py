from Button import Button

class JButton(Button):
    btn = "JButton btn1 = new JButton();\n"

    def render(self):
        print(self.btn)

    def onClick(self, f):
        if(f == "closeDialog"):
            self.btn = self.btn + "jBtn1.addActionListener(ev -> System.exit());"