const config = require("./config.json");

const shuffle = (str) => {
  return str
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
};

const passwordGenerator = () => {
  const uppers = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  const lowers = Array.from("abcdefghijklmnopqrstuvwxyz");
  const specials = Array.from("!@#$%^&*()-+=[]{}/?.<>");
  const numbers = Array.from("1234567890");

  let u = Math.floor(Math.random() * config.length) - 2;
  if (u < 1) u = 1;
  //^^ subtracting because we want to completely ensure that there are characters leftover for other requirements
  let l = Math.floor(Math.random() * (config.length - u)) - 1;
  if (l < 1) l = 1;
  let n = Math.floor(Math.random() * (config.length - u - l)) - 1;
  if (n < 1) n = 1;
  let s = config.length - u - l - n;

  console.log(u, l, n, s);

  let str = "";
  for (let i = 0; i < u; i++)
    str += uppers[Math.floor(Math.random() * uppers.length)];
  for (let i = 0; i < l; i++)
    str += lowers[Math.floor(Math.random() * lowers.length)];
  for (let i = 0; i < s; i++)
    str += specials[Math.floor(Math.random() * specials.length)];
  for (let i = 0; i < n; i++)
    str += numbers[Math.floor(Math.random() * numbers.length)];

  return shuffle(str);
};

console.log(passwordGenerator());
