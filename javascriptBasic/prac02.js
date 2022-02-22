// nethod, func 선언 .. 이게 예전 방식
function test(p1, p2) {
    return p1 + p2;
}

console.log(test(5, 5));


const plus = (p1, p2) => {      // this가 가리키는 개념이 다름.
    return p1 + p2;
}
console.log(plus(1, 4));

//work#01
//arrow func로 minus / multi /div 세개의 기능 선언해라

function arrow(a, b) {
    const minus = (a, b) => {
        return a - b;
    }

    const multi = (a, b) => {
        return a * b;
    }
    const div = (a, b) => {
        return a / b;
    }
    console.log(minus(a, b))
    console.log(multi(a, b))
    console.log(div(a, b))
}

arrow(12, 4)
