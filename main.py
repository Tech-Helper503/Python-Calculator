import numpy as np


def main():
    calculator = Calculator()
    calculator.getInput()
    calculator.checkInputs()

class Calculator():
    def addNumbers(self):
        return np.add(self.num1,self.num2)

    def subtractNumbers(self):
        return np.subtract(self.num1,self.num2)

    def multiplyNumbers(self):
        return np.multiply(self.num1,self.num2)

    def divideNumbers(self):
        return np.divide(self.num1,self.num2)

    def getInput(self):
        self.num1 = input("Enter a number(s):").split(",")
        self.num2 = input("Enter another number(s):").split(",")
        self.op = input('Enter an operator(s):')

        for i in range(len(self.num1) - 1):
            for i in range(len(self.num2) - 1):
                int(self.num1[i])
                int(self.num2[i])

    def checkInputs(self):
        if self.op == "+":
            print(self.addNumbers())
        elif self.op == "-":
            print(self.subtractNumbers())
        elif self.op == "*":
            print(self.multiplyNumbers())
        elif self.op == "/":
            print(self.divideNumbers())
        else:
            print('Invalid Operator')


if __name__ == "__main__":
    main()