// function calc() {
//     let num1 = +prompt("Введите первое число");
//     let num2 = +prompt("Введите второе число");
//     if (isNaN(num1) || isNaN(num2)) {
//       console.log("Некорректный ввод!");
//     } else if (num1 % num2 != 0) {
//       console.log(`${num1} не делится без остатка на ${num2}`);
//     } else {
//         const sum = num1+num2;
//         const division = num1/num2
//         console.log(`Ответ: ${sum}, ${division}.`);
//     }
//   }

//   calc();

// function validationNumber() {
//   let num1 = +prompt("Введите первое число");
//   let num2 = +prompt("Введите второе число");
//   if (isNaN(num1) || isNaN(num2) || num2 > 36 || num2 < 2) {
//     console.log("Некорректный ввод!");
//   } else {
//     const result = num1.toString(num2);
//     console.log(result);
//   }
// }

// validationNumber();

function Error(mesage) {
    this.mesage = mesage;
}

const myIterable = {
  from: 2,
  to: 10,
};

myIterable[Symbol.iterator] = function () {
  if(typeof this.from !== 'number' || this.from > this.to){
    throw new Error('Невалидные данные');
  }
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

for (let item of myIterable) {
  console.log(item);
}
//Big O - 0(n)
