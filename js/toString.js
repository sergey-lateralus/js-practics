let value = 0;

let toString = String(value);
console.log(`${value}, через конструктор String: `, toString);
console.log(`Тип данных ${value}, через конструктор String: `, typeof toString);

toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`Тип данных ${value}, через конкатенацию: `, typeof toString);

value = 1;

toString = String(value);
console.log(`${value}, через конструктор String: `, toString);
console.log(`Тип данных ${value}, через конструктор String: `, typeof toString);

toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`Тип данных ${value}, через конкатенацию: `, typeof toString);

value = Infinity;

toString = String(value);
console.log(`${value}, через конструктор String: `, toString);
console.log(`Тип данных ${value}, через конструктор String: `, typeof toString);

toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`Тип данных ${value}, через конкатенацию: `, typeof toString);

value = NaN;

toString = String(value);
console.log(`${value}, через конструктор String: `, toString);
console.log(`Тип данных ${value}, через конструктор String: `, typeof toString);

toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`Тип данных ${value}, через конкатенацию: `, typeof toString);

value = true;
toString = String(value);
console.log(`${value}, через конструктор String: `, toString);
console.log(`Тип данных ${value}, через конструктор String: `, typeof toString);

toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`Тип данных ${value}, через конкатенацию: `, typeof toString);

value = false;
toString = String(value);
console.log(`${value}, через конструктор String: `, toString);
console.log(`Тип данных ${value}, через конструктор String: `, typeof toString);

toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`Тип данных ${value}, через конкатенацию: `, typeof toString);

value = undefined;
toString = String(value);
console.log(`${value}, через конструктор String: `, toString);
console.log(`Тип данных ${value}, через конструктор String: `, typeof toString);

toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`Тип данных ${value}, через конкатенацию: `, typeof toString);

value = null;
toString = String(value);
console.log(`${value}, через конструктор String: `, toString);
console.log(`Тип данных ${value}, через конструктор String: `, typeof toString);

toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`Тип данных ${value}, через конкатенацию: `, typeof toString);