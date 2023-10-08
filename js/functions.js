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
