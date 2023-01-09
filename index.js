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
  } else if (typeof callback !== "function") {
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
      if (callback.call(context, this[i], i, obj)) {
        filteredArray.push(this[i]);
      }
    }
  }

  return filteredArray;
};

const newArr = arr.myFilter(isPrime);
console.log(newArr);

//реализация Stack

function Stack() {
  this.size = 0;
  this.storage = {};
}

Stack.prototype.push = function (data) {
  let size = ++this.size;
  this.storage[size] = data;
};

Stack.prototype.pop = function () {
  let size = this.size,
    deletedData;

  if (size) {
    deletedData = this.storage[size];

    delete this.storage[size];

    this.size--;
  } else {
    throw new Error("Stack is empty");
  }

  return deletedData;
};

Stack.prototype.peekBack = function () {
  let size = this.size,
    lastData;

  if (size) {
    lastData = this.storage[size];
  } else {
    throw new Error("Stack is empty");
  }

  return lastData;
};

Stack.prototype.isEmpty = function () {
  if (this.size >= 1) {
    return false;
  } else {
    return true;
  }
};

Stack.prototype.length = function () {
  return this.size;
};

const test = new Stack();
test.push("a");
test.push(4);
test.push(5);
test.pop();
console.log(test);

const test2 = test.peekBack();
console.log(test2);

const emptyTest = test.isEmpty();
console.log(emptyTest);

const sizeTest = test.length();
console.log(sizeTest);

//Очередь

function Queue() {
  this.oldestIndex = 1;
  this.newestIndex = 1;
  this.storage = {};
}

Queue.prototype.size = function () {
  return this.newestIndex - this.oldestIndex;
};

Queue.prototype.enqueue = function (data) {
  this.storage[this.newestIndex] = data;
  this.newestIndex++;
};

Queue.prototype.dequeue = function () {
  if (this.oldestIndex !== this.newestIndex) {
    let deletedData = this.storage[this.oldestIndex];
    delete this.storage[this.oldestIndex];
    this.oldestIndex++;

    for (let key in this.storage) {
      key - 1;
    }

    return deletedData;
  }
};

Queue.prototype.front = function () {
  if (this.oldestIndex !== this.newestIndex) {
    return this.storage[this.oldestIndex];
  } else {
    console.log("method front: Queue is empty");
  }
};

Queue.prototype.isEmpty = function () {
  if (this.oldestIndex !== this.newestIndex) {
    return false;
  } else {
    return true;
  }
};

//реализация связанного списка

class LinkedListNode {
  constructor(value, next = null) {
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

    if (!this.head || !this.tail) {
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

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  find(value) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  insertAfter(value, prevNode) {
    if (prevNode === null) {
      return this;
    }

    const newNode = new LinkedListNode(value);

    newNode.next = prevNode.next;

    prevNode.next = newNode;

    if (newNode.next === null) {
      this.tail = newNode;
    }

    return this;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (this.tail?.value === value) {
      this.tail === currentNode;
    }

    return deletedNode;
  }
}

//двусвязанный список

class DoublyLinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            previous: null
        };
        this.length = 1;
        this.tail = this.head;
    }

    append(value) {
        let newNode = new DoublyLinkedListNode(value);

        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;

        this.length++;
        this.toArray();
    }

    prepend(value) {
        let newNode = new DoublyLinkedListNode(value);

        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;

        this.length++;
        this.toArray();
    }

    insertAfter (index, value) {
        if (!Number.isInteger(index) || index < 0 || index > this.length + 1) {
            console.log(`Invalid index. Current length is ${this.length}.`);
            return this;
        }

        if (index === 0) {
            this.prepend(value);
            return this;
        }

        if (index === this.length) {
            this.append(value);
            return this;
        }

        let newNode = new DoublyLinkedListNode(value);
        let previousNode = this.head;

        for (let k = 0; k < index - 1; k++) {
            previousNode = previousNode.next;
        }

        let nextNode = previousNode.next;
        
        newNode.next = nextNode;
        previousNode.next = newNode;
        newNode.previous = previousNode;
        nextNode.previous = newNode;

        this.length++;
        this.toArray();
    }

    delete (index) {
        if (!Number.isInteger(index) || index < 0 || index > this.length) {
            console.log(`Invalid index. Current length is ${this.length}.`);
            return this;
        }

        if (index === 0) {
            this.head = this.head.next;
            this.head.previous = null;

            this.length--;
            this.toArray();
            return this;
        }

        if (index === this.length - 1) {
            this.tail = this.tail.previous;
            this.tail.next = null;

            this.length--;
            this.toArray();
            return this;
        }

        let previousNode = this.head;

        for (let k = 0; k < index - 1; k++) {
            previousNode = previousNode.next;
        }
        let deleteNode = previousNode.next;
        let nextNode = deleteNode.next;

        previousNode.next = nextNode;
        nextNode.previous = previousNode;

        this.length--;
        this.toArray();
        return this;
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
        console.log(nodes);
        return nodes;
    
