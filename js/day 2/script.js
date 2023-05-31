function executeTask(task) {
  let result = "";
  switch (task) {
    case "task1":
      let date = new Date(2012, 1, 20, 3, 12);
      alert(date);
      result = "Виконується завдання 1\n";
      break;

    case "task2":
      function getWeekDay(date2) {
        let weekday = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];
        return weekday[date2.getDay()];
      }
      let date2 = new Date(2012, 0, 3);
      alert(getWeekDay(date2));
      result += "Виконується завдання 2\n";
      break;

    case "Mentors's task":
      function daysBetweenDates(d1, d2) {
        const oneDay = 24 * 60 * 60 * 1000;
        const firstDate = new Date(d1);
        const secondDate = new Date(d2);
        const diffDays = Math.round(
          Math.abs((firstDate - secondDate) / oneDay)
        );
        return diffDays;
      }

      const d1 = "1999-02-01";
      const d2 = "2023-05-31";
      const daysBetween = daysBetweenDates(d1, d2);
      alert(`Між ${d1} та ${d2} пройшло ${daysBetween} днів.`);
      result += "Виконується завдання від ментора \n";
      break;

    default:
      result += "Невідоме завдання\n";
  }
  return result;
}

let output = "";

output += executeTask("task1");
output += executeTask("task2");
output += executeTask("Mentors's task");
output += executeTask("unknownTask");

console.log(output);
