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


console.log(car.name + "의 마력은 " + car.ph + "입니다. ")
car.start; //에러는 나지 않았지만.. 출력은 X. 
//js는 함수 자체를 객체로 보도록 설계되어있음. 내가 원하는 결과를 보기위해.. 함수로서 실행시키기 위해서는 괄호 붙여줘라.

car.start();