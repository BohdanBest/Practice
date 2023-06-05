function day5(task) {
  let result = "";
  switch (task) {
    case "task1":
      class Animal {
        constructor(name) {
          this.name = name;
        }
      }

      class Rabbit extends Animal {
        constructor(name) {
          super(name);
          this.name = name;
          this.created = Date.now();
        }
      }

      let rabbit = new Rabbit("White Rabbit");
      alert(rabbit.name);

      result = "Виконується завдання 1\n";
      break;

    case "task2":
      class Rabbit2 extends Object {
        constructor(name) {
          super();
          this.name = name;
        }
      }

      let rabbit2 = new Rabbit2("Rab");

      alert(rabbit2.hasOwnProperty("name"));
      result += "Виконується завдання 2\n";
      break;
    // Проміси
    case "task3":
      function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
      delay(3000).then(() => alert("виконалось через 3 секунди"));
      result += "Виконується завдання 3\n";
      break;

    case "task4":
      function start() {
        showCircle(150, 150, 100, (div) => {
          div.classList.add("message-ball");
          div.append("Hello, world!");
        });
      }

      function showCircle(cx, cy, radius, callback) {
        let div = document.createElement("div");
        div.style.width = 0;
        div.style.height = 0;
        div.style.left = cx + "px";
        div.style.top = cy + "px";
        div.className = "circle";
        document.body.append(div);

        setTimeout(() => {
          div.style.width = radius * 2 + "px";
          div.style.height = radius * 2 + "px";

          div.addEventListener("transitionend", function handler() {
            div.removeEventListener("transitionend", handler);
            callback(div);
          });
        }, 0);
      }
      result += "Виконується завдання 4\n";
      break;

    default:
      result += "Невідоме завдання\n";
  }
  return result;
}

let output = "";

output += day5("task1");
output += day5("task2");
output += day5("task3");
output += day5("task4");
output += day5("unknownTask");

console.log(output);
