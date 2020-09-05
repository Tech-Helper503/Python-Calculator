class Calculator{
    constructor(){
        this.num1 = document.getElementById('num1-input')
        this.num2 = document.getElementById('num2-input')
        this.op = document.getElementById('op-btn-input')

        this.lements = [num1,num2,op]
        this.values = []

        for(const element in elements){
            element.addEventListener('on-change',(e) => {
                this.values.push(e.target.value)
            })
        }
        radix = 10;
    }
    
    addNumbers() {
        let num1s = []
        let num2s = []
        let result  = []

        for(const num in this.values){
            num1s.push(parseInt(num,radix))
        }

        for(const num in this.values){
            num2s.push(parseInt(num,radix))
        }

        for(const num1 in this.values){
            for(const num2 in num2s){
                result.push(num1 + num2)
            }
        }

        return result
    }

    subtractNumbers(){
        let num1s = []
        let result  = []
        
        for(value in this.values){
            results.append(this.values / this.v)
        }
        
        return result
    }

    multiplyNumbers(){
        let num1s = []
        let num2s = []
        let result  = []

        for(const num in num1){
            num1s.push(parseInt(num,radix))
        }

        
            num2s.push(parseInt(num,radix))
        }

        for(const num1 in num1s){
            for(const num2 in num2s){
                result.push(num1 * num2)
            }
        }

        return result
    }

    divideNumbers(){
        let num1s = []
        let result  = []


        for(const num1 in num1s){
            result.push(num1 / num2)
        }

        return result
    }



    checkInputs(){
        if(op == "+"){
            print(this.addNumbers())
        }else if(op == "-"){
            print(this.subtractNumbers())
        }else if(op == "*"){
            print(multiplyNumbers())
        }
        else if(op == "/"){
            print(this.divideNumbers())
        }
        else{
            print('Invalid Operator')
        }
    }


}