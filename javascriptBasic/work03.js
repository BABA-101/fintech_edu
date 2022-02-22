let car1 = {
    name: "sonata",
    ph: 200,
    start: () => {
        console.log("engine start");
    },
    stop: () => {
        console.log("engine stpp");
    }
}
let car2 = {
    name: "bmw",
    ph: 200,
    start: () => {
        console.log("engine start");
    },
    stop: () => {
        console.log("engine stpp");
    }
}
let car3 = {
    name: "tesla",
    ph: 200,
    start: () => {
        console.log("engine start");
    },
    stop: () => {
        console.log("engine stpp");
    }
}

let cars = [car1, car2, car3];



//#work3 배열 내 bmw라는 이름을 가진 차량이 있을 때  "차량이 있습니다" 텍스트를 출력
for (car of cars) {
    if (car.name === "bmw") {
        console.log("차량이 있습니다.")
    }

}

cars.map((car) => {
    if (car.name === "bmw") {  //===하면 타입을 좀 더 명확하게 구분을 하겠다는 의미임. 이거 사용 권장한다. ==말고.^^ js는 타입 명시를 안하잖니
        console.log("차량이 있습니다.")
    }
});