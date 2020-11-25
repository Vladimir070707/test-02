/*1. Реализовать функцию foo:
let a = {
    name: 'static',
    count: 0
}
console.log(foo(a, 'count', 10)); *//* В консоль выведет: [{name:'static', count:0},
 {name:'static', count:1}, ..., {name:'static', count:9}] */
let a = {
    name: 'static',
    count: 0
}

let foo = (obj, prop, value)=>{
	let arr = [];
	for (let i = 0; i < value; i++) {
		let b = {...a}
		b[prop] = i;
		arr.push({b})
	}
	return arr;
}
console.log(foo(a,'count',10))



/*2. Сделайте функцию, каждый вызов который будет генерировать одно случайное число 
от 1 до 100, но так, чтобы оно не повторялось, пока не будут перебраны все 
числа из этого промежутка. Решите задачу через замыкания - в замыкании должен 
хранится массив чисел, которые уже были сгенерированы функцией.*/
/*let arr = []


let f1 = function() {
	let arr = [];
	return function() {
		let new_num = Math.floor(Math.random() * 100 + 1);
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] == new_num) {return}
		};

	}
	}
	

/*3. Построить объект студент:
- свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
- метод объекта выводящий в консоль биографическую справку в виде, например: 
«Иван Петров. 21 год. Интересы: программирование, музыка, аниме. Учится в ИТМО.*/

let student = {
		name:"Иван",
		surname:"Петров",
		age:21,	interes:["программирование","музыка","аниме"],
		university:"ITMO",
	obj:function(){
			return `${this.name} ${this.surname}.${this.age}год.Интересы: ${this.interes}.чится в ${this.university}.`
		}
	}

	console.log(student.obj())
	
/*4. Написать функцию вычисляющую факториал числа с использованием рекурсии.
Факториал числа - это число, умноженное на себя минус один, затем на себя 
минус два и так далее, до единицы. Обозначается n!
Определение факториала можно записать как: n! = n * (n - 1) * (n - 2) * ...*1*/
let factorial = function(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(3));

/*5. Отсортировать массив по полю 'price' используя метод sort и передаваемую ей функцию, 
определяющую порядок сортировки. Массив для тестирования: 
let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5}, 
{ 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},];*/
let  arr5  = [ 
	{ 'price' : 10, 'count' : 2}, 
	{ 'price' : 5, 'count' : 5}, 
	{ 'price' : 8, 'count' : 5 }, 
	{ 'price' : 12, 'count' : 4 }, 
	{ 'price' : 8, 'count' : 4}
	];
	console.log(arr5.join());
arr5.sort((a, b)=>{a.price - b.price});
console.log(arr5.join());



