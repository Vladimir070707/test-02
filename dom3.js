/*1. Заданы два массива 
A = [ 12, 4, 3, 10, 1, 20 ]  
B = [-3, -7, -100, -33] 
необходимо их объединить 
в один массив C добавив 
массив B в конец(в начало) A.*/ 

let A = [ 12, 4, 3, 10, 1, 20 ]; 
let B = [-3, -7, -100, -33];
let C = [A,B];
	console.log(C);
	C.shift(A);
	C.push(A);
	console.log(C);	
/* 2. Одномерным массивом задана доска 3 на 3 
var area = [ null, null, null, null, null, null, null, null, null ]
Необходимо сформировать и вывести (document.write) игровое поле состоящее из квадратов для крестиков-ноликов  в HTML. 
При появлении в массиве 0-ля рисовать нолик , 1-цы крестик 
Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик.*/

 /*3. Задан массив  - [12,4,3,10,1,20]. 
 Удалить из него наименьшее и наибольшее значение*/
 
 let mas = [12,4,3,10,1,20];
	  console.log(mas);
 	  mas.splice( mas.indexOf(Math.min.apply(null, mas)),1);
	  mas.splice( mas.indexOf(Math.max.apply(null, mas)),1);
      console.log(mas);