function day3(task) {
  let result = "";
  switch (task) {
    case "task1":
      let animal = {
        jumps: null,
      };
      let rabbit = {
        __proto__: animal,
        jumps: true,
      };

      alert(rabbit.jumps); // ? (1)

      delete rabbit.jumps;

      alert(rabbit.jumps); // ? (2)

      delete animal.jumps;

      alert(rabbit.jumps); // ? (3)

      //Спочатку покаже true, бо значення візьметься з rabbit
      //Потім успадкує з animal значення null
      //в кінці буде undefined, бо не в жодному з об'єктів не залишеться властивості jumps
      result = "Виконується завдання 1\n";
      break;

    case "task2":
      let head = {
        glasses: 1,
      };

      let table = {
        __proto__: head,
        pen: 3,
      };

      let bed = {
        __proto__: table,
        sheet: 1,
        pillow: 2,
      };

      let pockets = {
        __proto__: bed,
        money: 2000,
      };
      alert(pockets.pen);
      alert(bed.glasses);

      let t0 = performance.now();
      let glasses1 = pockets.glasses;
      let t1 = performance.now();
      console.log("Час виконання через pockets.glasses: " + (t1 - t0) + " мс");

      t0 = performance.now();
      let glasses2 = head.glasses;
      t1 = performance.now();
      console.log("Час виконання через head.glasses: " + (t1 - t0) + " мс");

      result += "Виконується завдання 2\n";
      break;

    case "task3":
      console.log(
        "Властивість full буде записана в самому об'єкті rabbit, оскільки при виклику методу спочатку шукається відповідний метод в самому об'єкті, а якщо його там немає, то він шукається в прототипі."
      );

      result += "Виконується завдання 3\n";
      break;

    case "task4":
      let hamster = {
        stomach: [],

        eat(food) {
          this.stomach.push(food);
        },
      };

      let speedy = {
        __proto__: hamster,
        stomach: [],
      };

      let lazy = {
        __proto__: hamster,
        stomach: [],
      };

      speedy.eat("apple");
      alert(speedy.stomach);

      alert(lazy.stomach);

      result += "Виконується завдання 4\n";
      break;

    default:
      result += "Невідоме завдання\n";
  }
  return result;
}

let output = "";

output += day3("task1");
output += day3("task2");
output += day3("task3");
output += day3("task4");
output += day3("unknownTask");

console.log(output);
