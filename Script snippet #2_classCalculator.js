class calculator {
        constructor(x,y){
            this.x = y;
            this.y = y;
        }
            addition(x,y) {
                return x + y;
            }
            subtraction(x,y) {
                return x - y;
            }
            multiplication(x,y){
                return x * y;
            }
            division(x,y) {
                return x / y;
            }
            
}

let calc = new calculator();

alert(`Addition: ${calc.addition(90,2)}`);
alert(`Subtraction: ${calc.subtraction(90,2)}`);
alert(`Multiplication: ${calc.multiplication(90,2)}`);
alert(`Division: ${calc.division(90,2)}`);