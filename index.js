function calc() {
    let num1 = +prompt("Введите первое число");
    let num2 = +prompt("Введите второе число");
    if (isNaN(num1) || isNaN(num2)) {
      console.log("Некорректный ввод!");
    } else if (num1 % num2 != 0) {
      console.log(`${num1} не делится без остатка на ${num2}`);
    } else {
        const sum = num1+num2;
        const division = num1/num2
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

function Queue(){
    this.oldestIndex = 1;
    this.newestIndex = 1;
    this.storage = {};
}

Queue.prototype.size = function() {
    return this.newestIndex - this.oldestIndex;
}

Queue.prototype.enqueue = function(data) {
    this.storage[this.newestIndex] = data;
    this.newestIndex++
}

Queue.prototype.dequeue = function() {
    if(this.oldestIndex !== this.newestIndex){
        let deletedData = this.storage[this.oldestIndex];
        delete this.storage[this.oldestIndex];
        this.oldestIndex++;

        for (let key in this.storage) {
            key - 1;
          }

        return deletedData;
    }
}

Queue.prototype.front = function() {
    if(this.oldestIndex !== this.newestIndex){
        return this.storage[this.oldestIndex];
    } else {
        console.log('method front: Queue is empty');
    }
}

Queue.prototype.isEmpty = function() {
    if(this.oldestIndex !== this.newestIndex){
        return false
    } else {
        return true
    }
}