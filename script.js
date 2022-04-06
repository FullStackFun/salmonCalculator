class salmonCalculator {
    constructor(previous, current) {
        this.previous = previous;
        this.current = current;
        this.clear();

    }

    clear() {
        this.currentop = '0';
        this.previousop = '';
        this.operations = 'undefned';
    }

    delete() {
        this.currentop = this.currentop.toString().slice(0, -1)
    }

    calculate() {
        let think;
        let before = parseFloat(this.previousop);
        let now = parseFloat(this.currentop);
        if(isNaN(before) || isNaN(now)) return;
        
        switch (this.operation) {
            case '+':
                think = before + now;
                break;
            case '-':
                think = before - now;
                break;
            case 'x':
                think = before * now;
                break;
            case '/':
                think = before / now;
                break;
        } 
        this.currentop = think;
        this.previousop = ''

    }

    

    append(number) {
        if (number === '.' && this.currentop.includes('.')) return;
       if (number === '0' && this.currentop.includes('0')) return; 
       if (this.currentop.substring(0, 1) === '0') {
           this.delete();
       }
      
     
        this.currentop = this.currentop.toString() + number.toString();
    }

    chooseop(operation) {
        if (this.currentop === '') return;
        if (this.previousop !== '') {
            this.calculate();
        }
        this.operation = operation;
      
        this.previousop = this.currentop;
        this.currentop = '';

    }

    update() {
        this.current.innerText = this.currentop;
        this.previous.innerText = this.previousop;
        

    }


}

let numbers = document.querySelectorAll('[data-number]');
let operations = document.querySelectorAll('[data-operation]');
let equals = document.querySelector('[data-equals]');
let del = document.querySelector('[data-delete]');
let clear = document.querySelector('[data-clear]');
let previous = document.querySelector('[data-previous]');
let current = document.querySelector('[data-current]');

let calculator = new salmonCalculator(previous, current);

numbers.forEach(button => {
    button.addEventListener('click', () => {
        calculator.append(button.innerText);
        calculator.update();
    })
})

operations.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseop(button.innerText);
        calculator.update();
    })
})

equals.addEventListener('click', button => {
    calculator.calculate();
    calculator.update();
})

clear.addEventListener('click', button => {
    calculator.clear();
    calculator.update();
})

del.addEventListener('click', button => {
    calculator.delete();
    calculator.update();
})

