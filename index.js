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

class LinkedListNode {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }

    toString() {
        return `${this.value}`;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new LinkedListNode(value);

        if(!this.head || !this.tail){
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        return this;

    }

    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);

        this.head = newNode;

        if(!this.tail){
            this.tail = newNode;
        }

        return this;
    }

    find(value) {
        if(!this.head){
            return null;
        }

        let currentNode = this.head;

        while(currentNode){
            if(currentNode.value === value){
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    insertAfter(value, prevNode){
        if(prevNode === null) {
            return this;
        }

        const newNode = new LinkedListNode(value);

        newNode.next = prevNode.next;

        prevNode.next = newNode;

        if(newNode.next === null) {
            this.tail = newNode;
        }

        return this;
    }

    delete(value) {
        if(!this.head){
            return null;
        }

        let deletedNode = null;

        while(this.head && this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if(currentNode !== null) {
            while(currentNode.next) {
                if(currentNode.next.value === value) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        if(this.tail?.value === value){
            this.tail === currentNode;
        }

        return deletedNode;
    }

    toArray() {
        const nodes = [];
        let currentNode = this.head;

        while(currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }
}