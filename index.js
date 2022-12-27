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

function selectFromInterval(arr, intervalValue1, intervalValue2) {
  if (
    typeof intervalValue1 !== "number" ||
    typeof intervalValue2 !== "number" ||
    !Array.isArray(arr)
  ) {
    throw new Error("Переданное значение не является массивом");
  }

  for (i = 0; i <= arr.length - 1; i++) {
    if (typeof arr[i] !== "number")
      throw new Error("Одно или несколько значений в массиве не являются числом");
  }

  const intervalArray = [];

  for (i = 0; i <= arr.length; i++) {
    if (
      (arr[i] >= intervalValue1 && arr[i] <= intervalValue2) ||
      (arr[i] <= intervalValue1 && arr[i] >= intervalValue2)
    ) {
      intervalArray.push(arr[i]);
    }
  }

  intervalArray.sort(function (a, b) {
    return a - b;
  });

  return intervalArray;
}

function Error(message) {
  this.message = message;
}


function makeObjectDeepCopy(obj) {
  let clone = Object.assign({}, obj);

  Object.keys(clone).forEach(
    (key) =>
      (clone[key] =
        typeof obj[key] === "object" ? makeObjectDeepCopy(obj[key]) : obj[key])
  );

  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : Array.isArray(obj)
    ? Array.from(obj)
    : clone;
}
