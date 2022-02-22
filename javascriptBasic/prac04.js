let car01 = "sonata";
let car02 = "bmw";
let car03 = "tesla";

let car = {
    name: "jinecha",
    ph: 200,
    start: () => {
        console.log("engine start");
    },
    stop: () => {
        console.log("engine stpp");
    }
}

let cars = [car01, car02, 392];
console.log(cars[2]);
console.log(car.start())

// In Java
// String [] cars=new array[10];


for (let i = 0; i < 3; i++) {
    console.log(i)
}

for (car of cars) { //cars라는 배열을 돌면서 해당 배열 길이만큼 반복.
    console.log(car)
}

for (let i = 0; i < cars.length; i++) {
    let car = cars[i];
    console.log(car)
}

cars.map((car) => { //배열 cars 내에 있는 요소들이 순서대로 car안으로 들어가는겨.
    console.error(car)
});