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

	