const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);
