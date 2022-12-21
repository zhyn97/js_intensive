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

validationNumber();
