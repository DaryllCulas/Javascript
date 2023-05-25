class Calculator2 {

    
        constructor() {    
            this.x = parseInt(window.prompt("Enter First Number:"));
            this.y = parseInt(window.prompt("Enter Second Number:"));
            
        
        }
            Addition() {
                return this.x + this.y;
            }

            Subtraction() {
                return this.x - this.y;
            }
    
            Multiplication() {
                return this.x * this.y;
            }

            Division() {
                return parseFloat(this.x) / parseFloat(this.y);
            }
            
}
let calc2 = new Calculator2();
alert(`Addition: ${calc2.x} + ${calc2.y} = ${calc2.Addition()}`);
alert(`Subtraction: ${calc2.x} - ${calc2.y} = ${calc2.Subtraction()}`);
alert(`Multiplication: ${calc2.x} * ${calc2.y} = ${calc2.Multiplication()}`);
alert(`Division: ${calc2.x} / ${calc2.y} = ${calc2.Division()}`);
