/*
class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}
*/

function printT ( T:number ):void {
    var i:number;    
    for(i=1;i<=T;i++) {
        draw(i,T);
        console.log(S);
        S = "";
    }
}

function draw (Ceng:number,Total:number):void {
    var i:number,j:number;
//    console.log(k);
    for(i=0;i<Total-Ceng;i++) {
        drawB();
    } 
    for(j=0;j<2*Ceng-1;j++) {
        drawX();
    }
}

function drawX ( ):void { 
    S = S + "*";
}

function drawB ( ):void {
    S = " " + S;
}

var S = "";

window.onload = () => {    
    printT(10);
};