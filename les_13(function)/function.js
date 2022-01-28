let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage('hi')
console.log(num);

function calc(a, b){
    return(a + b)
}


console.log(calc(2, 5));
console.log(calc(4, 6));
console.log(calc(6, 3));

function ret(){
    let num = 50;


    return num;
}

const anotherNum = ret();
console.log(anotherNum);



const logger = function () {
    console.log('git');
};

logger()


const calc = (a, b) => a + b;