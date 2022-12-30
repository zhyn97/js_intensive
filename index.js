function calc() {
  let num1 = +prompt("Введите первое число");
  let num2 = +prompt("Введите второе число");
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Некорректный ввод!");
  } else if (num1 % num2 != 0) {
    console.log(`${num1} не делится без остатка на ${num2}`);
  } else {
    const sum = num1 + num2;
    const division = num1 / num2;
    console.log(`Ответ: ${sum}, ${division}.`);
  }
}

function validationNumber() {
  let num1 = +prompt("Введите первое число");
  let num2 = +prompt("Введите второе число");
  if (isNaN(num1) || isNaN(num2) || num2 > 36 || num2 < 2) {
    console.log("Некорректный ввод!");
  } else {
    const result = num1.toString(num2);
    console.log(result);
  }
}

//функция интервала в массиве

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
      throw new Error(
        "Одно или несколько значений в массиве не являются числом"
      );
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

//функция глубокого копирования

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
function Error(mesage) {
  this.mesage = mesage;
}

//итерируемый объект

const myIterable = {
  from: 2,
  to: 10,
};

myIterable[Symbol.iterator] = function () {
  if (typeof this.from !== "number" || this.from > this.to) {
    throw new Error("Невалидные данные");
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

//Аналог метода фильтр

let arr = [3, 1, -14, 40, 58, 39, 47, 11, 114, -9, 8, 76, 93];

function isPrime(num) {
  if (num <= 1) return false;
  else if (num === 2) return true;
  else {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return true;
  }
}

Array.prototype.myFilter = function (callback, thisArg) {
  if (this == null) {
    throw new Error("Ошибка. Передан null или undefind");
  } else if (typeof callback !== 'function'){
    throw new Error("Переданная callback функция не является функцией");
  }

  let obj = new Object(this);

  let context = this;

  if (arguments.length > 1) {
    context = thisArg;
  }

  let filteredArray = [];

  for (let i = 0; i < obj.length; i++) {
    if (i in obj) {
        if(callback.call(context, this[i], i, obj)){
            filteredArray.push(this[i]);
        }
    }
  }
  
  return filteredArray;
};

const newArr = arr.myFilter(isPrime);
console.log(newArr);

//Функция задержки

function createDebounceFunction(callbackFun, delay) {
    let timer
    return (...arguments) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callbackFun(arguments)
        }, delay)
    }
}

const log100 = () => console.log(100);
const debounceLog100 = createDebounceFunction(log100, 3000);
debounceLog100();
setTimeout(debounceLog100, 200);
setTimeout(debounceLog100, 400);
