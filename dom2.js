//Задание 2.1
let month = "11";
switch(month){
	case '12':
	case '1':
	case '2':
	    alert("зима");
		break;
	case '3':
	case '4':
	case '5':
		alert("весна");
		break;
	case '6':
	case '7':
	case '8':
	     alert("лето");
		 break;
	case '9':
	case '10':
	case '11':
	      alert("осень");
		  break;
	default:
	       alert("Такой месяц не сцществует");
		}
// Задание 2.2
let n = prompt("Единица длинны");
let lon = prompt("Длинна отрезка");
switch(n){   
	case "1": alert(lon / 10); break;
	case "2":alert(lon * 1000); break;
	case "3":alert(lon); break;
	case "4":alert(lon / 1000); break;
	case "5":alert(lon / 100); break;
}
// Задание 2.3
let number = prompt("Введите число от -999 до 999");
if (number >= -999 && number <= -100) {
	alert ("отрицательное трёхзначное число")};
if (number >= -99 && number <= -10) {
	alert ("отрицательное двузначное число")};
if (number >= -9 && number <= -1) {
	alert ("отрицательное однозначное число")};	
if (number === 0 ){
	alert ("нулевое число")}; 
if (number >= 1 && number <= 9) {
	alert ("положительное однозначное число")};
if (number >= 10 && number <= 99) {
	alert ("положительное двузначное число")}; 
if (number >= 100 && number <= 999) {
	alert ("положительное трёхзначное число")}; 

// Задание 2.4 Не понимаю как сделать чтобы вместо числа писал текст
let sum = 1; 
for( let sum = 1; sum <= 100; sum ++) {
	console.log(sum);
if (sum % 3 == 0 && sum % 5 != 0) {console.log("three")};
if  (sum % 5 == 0 && sum % 3 != 0) {console.log("five")};
if (sum % 15 == 0) {console.log("three five")};
}
		
	