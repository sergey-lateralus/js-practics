let value = 'Bla bla bla';

let toNumber = Number(value);
console.log(`${value}, через конструктор Number: `, toNumber);
console.log(`Тип данных ${value}, через конструктор Number: `, typeof toNumber);

toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`Тип данных ${value}, через унарный +: `, typeof toNumber);

value = '123';

toNumber = Number(value);
console.log(`${value}, через конструктор Number: `, toNumber);
console.log(`Тип данных ${value}, через конструктор Number: `, typeof toNumber);

toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`Тип данных ${value}, через унарный +: `, typeof toNumber);

value = '';

toNumber = Number(value);
console.log(`Пустая строка ${value}, через конструктор Number: `, toNumber);
console.log(`Тип данных пустой строки ${value}, через конструктор Number: `, typeof toNumber);

toNumber = +value;
console.log(`Пустая строка ${value}, через унарный +: `, toNumber);
console.log(`Тип данных пустой строки ${value}, через унарный +: `, typeof toNumber);

value = ' ';

toNumber = Number(value);
console.log(`строка с пробелом ${value}, через конструктор Number: `, toNumber);
console.log(`Тип данных строки с пробелом ${value}, через конструктор Number: `, typeof toNumber);

toNumber = +value;
console.log(`строка с пробелом ${value}, через унарный +: `, toNumber);
console.log(`Тип данных строки с пробелом ${value}, через унарный +: `, typeof toNumber);

value = true;
toNumber = Number(value);
console.log(`${value}, через конструктор Number: `, toNumber);
console.log(`${value}, через конструктор Number: `, typeof toNumber);

toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`${value}, через унарный +: `, typeof toNumber);

value = false;
toNumber = Number(value);
console.log(`${value}, через конструктор Number: `, toNumber);
console.log(`${value}, через конструктор Number: `, typeof toNumber);

toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`${value}, через унарный +: `, typeof toNumber);

value = undefined;
toNumber = Number(value);
console.log(`${value}, через конструктор Number: `, toNumber);
console.log(`${value}, через конструктор Number: `, typeof toNumber);

toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`${value}, через унарный +: `, typeof toNumber);

value = null;
toNumber = Number(value);
console.log(`${value}, через конструктор Number: `, toNumber);
console.log(`${value}, через конструктор Number: `, typeof toNumber);

toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`${value}, через унарный +: `, typeof toNumber);
