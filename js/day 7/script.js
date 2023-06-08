//Розширена робота з функціями
// Напишіть функцію sumTo(n), що обчислює суму чисел 1 + 2 + ... + n.
function sumTo(n) {
  //Використання циклу.
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
function sumTo2(m) {
  //Використання рекурсії, у випадку sumTo(n) = n + sumTo(n-1) для n > 1.
  let sum = 0;
  if (m === 1) return 1;
  return (sum = m + sumTo2(m - 1));
}
function sumTo3(t) {
  //Використання формули арифметичної прогресії.
  let sum = 0;
  return (t * (t + 1)) / 2;
}
console.log(sumTo(100));
console.log(sumTo2(100));
console.log(sumTo3(100));

// Завдання полягає в тому, щоб написати функцію factorial(n), яка обчислює n! за допомогою рекурсивних викликів.
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

//Напишіть функцію fib(n), яка повертає n-th число Фібоначчі.
function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(3));
console.log(fib(7));

//Напишіть функцію printList(list), що виводить список елементів один за одним. Зробіть два варіанти рішення: з використанням циклу та з використанням рекурсії.
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
function printList(list) {
  let current = list;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}
printList(list);

function printList2(list) {
  let current = list;
  if (current) {
    console.log(current.value);
    printList2(current.next);
  }
}
printList2(list);

let list2 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
//Вивести одинозв’язаний список у зворотному порядку. Зробіть два рішення: за допомогою циклу та з використанням рекурсії.
function reverseList(list2) {
  let cur = list2;
  let prev = null;
  while (cur) {
    prev = { value: cur.value, next: prev };
    cur = cur.next;
  }
  return prev;
}
printList(reverseList(list2));

function reverseList2(list2) {
  if (list2.next === null) {
    return list2;
  }
  return reverseList2(list2.next) + list2.value;
}
printList(reverseList(list2));
