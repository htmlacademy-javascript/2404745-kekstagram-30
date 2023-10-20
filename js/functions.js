/* eslint-disable prefer-const */
/* eslint-disable no-console */
const checkTheString = (str, strLength) => str.length <= strLength;

console.log(checkTheString('проверяемая строка', 20));
console.log(checkTheString('проверяемая строка', 18));
console.log(checkTheString('проверяемая строка', 10));

const isTheStringApalindrome = (str) => {
  const newStr = str.replaceAll(' ', '').toLowerCase();
  const newStrReverse = newStr.split('').reverse().join('');
  return newStr === newStrReverse;

};

console.log(isTheStringApalindrome('Лёша на полке клопа нашёл ') ? 'строка  является палиндромом' : 'строка ne является палиндромом');
console.log(isTheStringApalindrome('Создать новую пустую строку и сохранить её в ещё одну переменную'));
console.log(isTheStringApalindrome('А роза упала на лапу Азора'));
console.log(isTheStringApalindrome('топот'));
console.log(isTheStringApalindrome('ДовОд'));
console.log(isTheStringApalindrome('Кекс'));

const extractsAnIntFromAstring = (value) => {
  let str;

  str = (typeof(value) === 'number') ? value.toString() : value;

  let newStr = '';
  for(let i = 0; i < str.length; i++) {

    newStr += (!Number.isNaN(parseInt(str[i], 10), 10)) ? str[i].toString() : '';
  }
  return parseInt(newStr, 10);
};

console.log(extractsAnIntFromAstring('2 0**& $ 2 3 год'));
console.log(extractsAnIntFromAstring('ECMAScript 2022'));
console.log(extractsAnIntFromAstring('1 кефир, 0.5 батона'));
console.log(extractsAnIntFromAstring('агент 007'));
console.log(extractsAnIntFromAstring('а я томат'));

console.log(extractsAnIntFromAstring(2023));
console.log(extractsAnIntFromAstring(-1));
console.log(extractsAnIntFromAstring(1.5));

const time = (beginWorkDay, endWorkDay, beginOfMeeting, durationOfMeeting) => {
  let arrBeginWorkDay = beginWorkDay.split(':');
  let arrEndWorkDay = endWorkDay.split(':');
  let arrBeginOfMeeting = beginOfMeeting.split(':');
  let beginWork = Number(arrBeginWorkDay[0]) * 60 + Number(arrBeginWorkDay[1]);
  let endWork = Number(arrEndWorkDay[0]) * 60 + Number(arrEndWorkDay[1]);
  let beginMeeting = Number(arrBeginOfMeeting[0]) * 60 + Number(arrBeginOfMeeting[1]);
  let workingDayDuration = endWork - beginWork;
  let meetingDuration = endWork - beginMeeting;
  if(beginMeeting + durationOfMeeting < beginWork || beginMeeting + durationOfMeeting > endWork) {
    return false;
  } else {
    if(workingDayDuration === meetingDuration) {
      return true;
    }
    return workingDayDuration - meetingDuration >= durationOfMeeting;
  }
};

console.log(time('08:00', '17:30', '14:00', 90)); // true
console.log(time('8:0', '10:0', '8:0', 120)); // true
console.log(time('08:00', '14:30', '14:00', 90)); // false
console.log(time('14:00', '17:30', '08:0', 90)); // false
console.log(time('8:00', '17:30', '08:00', 900)); // false

