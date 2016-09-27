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
function printT(T) {
    var i;
    for (i = 1; i <= T; i++) {
        draw(i, T);
        console.log(S);
        S = "";
    }
}
function draw(Ceng, Total) {
    var i, j;
    //    console.log(k);
    for (i = 0; i < Total - Ceng; i++) {
        drawB();
    }
    for (j = 0; j < 2 * Ceng - 1; j++) {
        drawX();
    }
}
function drawX() {
    S = S + "*";
}
function drawB() {
    S = " " + S;
}
var S = "";
window.onload = function () {
    printT(10);
};
//# sourceMappingURL=main.js.map