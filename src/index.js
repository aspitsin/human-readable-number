module.exports = function toReadable (number) {
  let string = number.toString();

  let i = 0; 
  if (string.length === 1) {   // Считаем просто единицы
    let units = unitsReading(string[i]);
    return (units);
  }
  if (string.length === 2) { // Считаем просто десятки
    if (string[1] === '0' || string[0] === '1'){  // Считаем десятки, которые заканчиются на ноль и начинаются на один
      let tens = tensReading(string);
      return (tens);
    }
    else {
      let tens = tensReading(string); // Считаем все остальные дестяки
      let units = unitsReading(string[1]);
      return (tens + ' ' + units);
    }    
  }
  if (string.length ===3 ){ //Считаем сотни
    if(string[1] === '0' && string [2] === '0'){ // Считаем округленные сотни 100 200
      let hund = unitsReading(string[0]) + ' hundred';
      return(hund);
    }
    else if(string[1] === '0') { // Считаем сотни у которых десятки на ноль 170 260
      let hund = unitsReading(string[0]) + ' hundred';
      let units = unitsReading(string[2]);
      return (hund + ' ' + units);
    }
    else if (string[1] === '1') { // Считаем сотни у который десятки на один 217 315
      let hund = unitsReading(string[0]) + ' hundred';
      let tens = tensReading((string.slice(1)));
      return (hund + ' ' + tens );
    }
    else if (string[2] != '0') { // Считаем сотни у которых едининцы не кончаются на ноль
      let hund = unitsReading(string[0]) + ' hundred';
      let tens = tensReading((string.slice(1)));
      let units = unitsReading(string[2]);
      return (hund + ' ' + tens + ' ' + units);
    }
    else {
      let hund = unitsReading(string[0]) + ' hundred'; // Все что не попало под условие
      let tens = tensReading(string.slice(1));
      return (hund + ' ' + tens);
    } 
  }
  else if (string.length > 3) {  //Проверка на случай длинного числа
    return 'I dont know';
  }
  
}

function unitsReading(param) { 
  switch(param){
    case '0': return 'zero';
    case '1': return 'one';
    case '2': return 'two';
    case '3': return 'three';
    case '4': return 'four';
    case '5': return 'five';
    case '6': return 'six';
    case '7': return 'seven';
    case '8': return 'eight';
    case '9': return 'nine';
}
}
 
function tensReading(param) {
  if(param[0] === '1'){
    switch(param){
      case '10': return 'ten';
      case '11': return 'eleven';
      case '12': return 'twelve';
      case '13': return 'thirteen';
      case '14': return 'fourteen';
      case '15': return 'fifteen';
      case '16': return 'sixteen';
      case '17': return 'seventeen';
      case '18': return 'eighteen';
      case '19': return 'nineteen';
    }
  }
  else {
    switch(param[0]){
      case '2': return 'twenty';
      case '3': return 'thirty';
      case '4': return 'forty';
      case '5': return 'fifty';
      case '6': return 'sixty';
      case '7': return 'seventy';
      case '8': return 'eighty';
      case '9': return 'ninety';
    }
  }
}



