let menu = {
  width: 200,
  height: 300,
  title: "Моє меню",
};

multiplyNumeric(menu);

function multiplyNumeric(obj) {
  for (const key in obj) {
    if (typeof obj[key] === key) {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
menu = {
  width: 400,
  height: 600,
  title: "Моє меню",
};
console.log(menu);
