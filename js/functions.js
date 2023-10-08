/* eslint-disable no-console */
const checkTheString = (str, strLength) => {
  if(str.length <= strLength) {
    return true;
  }
  return false;
};

console.log(checkTheString('проверяемая строка', 20));
console.log(checkTheString('проверяемая строка', 18));
console.log(checkTheString('проверяемая строка', 10));

const isTheStringApalindrome = (str) => {
  const newStr = str.replaceAll(' ', '').toLowerCase();
  const newStrReverse = newStr.split('').reverse().join('');
  if(newStr === newStrReverse) {
    return 'строка - палиндром';
  }
  return 'строка не является палиндромом';
};

console.log(isTheStringApalindrome('Лёша на полке клопа нашёл '));
console.log(isTheStringApalindrome('Создать новую пустую строку и сохранить её в ещё одну переменную'));
console.log(isTheStringApalindrome('А роза упала на лапу Азора'));
console.log(isTheStringApalindrome('топот'));
console.log(isTheStringApalindrome('ДовОд'));
console.log(isTheStringApalindrome('Кекс'));

const extractsAnIntFromAstring = (value) => {
  let str;
  if(typeof(value) === 'number') {
    str = value.toString();
  } else {
    str = value;
  }
  let newStr = '';
  for(let i = 0; i < str.length; i++) {
    if(!isNaN(str[i])) {
      newStr += str[i].toString();
    }
  }
  return parseInt(newStr.replaceAll(' ', ''), 10);
};

console.log(extractsAnIntFromAstring('2023 год'));
console.log(extractsAnIntFromAstring('ECMAScript 2022'));
console.log(extractsAnIntFromAstring('1 кефир, 0.5 батона'));
console.log(extractsAnIntFromAstring('агент 007'));
console.log(extractsAnIntFromAstring('а я томат'));

console.log(extractsAnIntFromAstring(2023));
console.log(extractsAnIntFromAstring(-1));
console.log(extractsAnIntFromAstring(1.5));
