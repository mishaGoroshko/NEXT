// Task 1
//Есть некоторая строка (;), что будет, если мы возьмем str[0]
// const str = 'fgfggg'
// console.log(
// 	str[0]
// )

// Task 2
// Реализуйте необходимый код, что бы выражение (2).plus(3).minus(1) сработало и вернуло 4


// Number.prototype.plus = function (value) {
// 	return this.valueOf() + value
// }

// Number.prototype.minus = function (value) {
// 	return this - value
// };


// console.log(
// 	(2).plus(3).minus(1)
// )



// Task 3
// Реализуйте функцию, которая принимает следующие аргументы (строки) , и возвращает строку '1*b*1c'

// function f() {
// 	return Array.prototype.slice.call(arguments, 1).join(args[0])
// }

// console.log(
// 	f('*', '1', 'b', '1c', "3",)
// )


// Task 4
// Напишите функцию которая найдет сумму всех вершин в структуре данны типа tree
// Рекурсивно
// В цикле

// const tree = {
// 	valueNode: 3,
// 	next: [
// 		{
// 			valueNode: 1,
// 			next: null
// 		},
// 		{
// 			valueNode: 3,
// 			next: null
// 		},
// 		{
// 			valueNode: 2,
// 			next: null
// 		},
// 		{
// 			valueNode: 2,
// 			next: [
// 				{
// 					valueNode: 1,
// 					next: null
// 				},
// 				{
// 					valueNode: 5,
// 					next: null
// 				}
// 			]
// 		}
// 	]
// };


// const getTreeSum = (tree) => {
// 	let sum = tree.valueNode

// 	if (tree.next) {
// 		tree.next.forEach(subtree => {
// 			sum += getTreeSum(subtree)
// 		})
// 	}

// 	return sum
// }

// console.log(
// 	getTreeSum(tree)
// )


// const getTreeSumWithLoop = (tree) => {

// 	let sum = 0
// 	let queue = [tree];

// 	while (queue.length) {

// 		let currentTree = queue.pop()
// 		sum += currentTree.valueNode

// 		if (currentTree.next) {
// 			currentTree.next.forEach(subtree => {
// 				queue.push(subtree)
// 			})
// 		}
// 	}

// 	return sum
// }

// console.log(
// 	getTreeSumWithLoop(tree)
// )



// Task 5
// исправить код, что бы работал правильно



// for (var i = 0; i < 10; i++) {
// 	(function (j) {
// 		setTimeout(() => {
// 			console.log(j)
// 		}, 1000)
// 	})(i)
// }

// Task 6
// Реализуйте функцию Foo, что бы все корректно работало

// function Book(name, author) {
// 	this.name = name;
// 	this.author = author;
// 	return this;
// }

// function Foo(bookConstructor, name, author) {
// 	return new bookConstructor(name, author)
// }

// const book = Foo(Book, 'js', 'petr');

// console.log(book.name);

// Task 7
// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5

// const f = (a, b) => {
// 	if (!b) {
// 		return (c) => {
// 			return a + c
// 		}
// 	} else {
// 		return a + b
// 	}
// }

// console.log(
// 	f(2, 3)// -> 5
// )
// console.log(
// 	f(2)(3) // -> 5
// )



// Task 8
// Реализовать функцию f: f(1)(2)(3)() -> 6, f()(3)(1)(5)() -> 9,

// const f = (value = 0) => {

// 	let outer = value

// 	return (value) => {
// 		if (!value) {
// 			return outer
// 		} else {
// 			return f(outer + value)
// 		}
// 	}
// }


// const f2 = (...args) => {
// 	return x => {
// 		console.log(args)
// 		if (!x) {
// 			return args.reduce((acc, a) => {
// 				return acc + a
// 			}, 0);
// 		}
// 		return f(...args, x);
// 	};
// };



// console.log(
// 	f()()
// )

// console.log(
// 	f()(5)(1)(3)(7)()
// )


// Task 9
// Реализовать функции seven, plus, one, five, minus, two так, что бы следующие вызовы работали

// const one = (value) => {
// 	return value ? value + 1 : 1
// }

// const two = (value) => {
// 	return value ? value + 2 : 2
// }

// const seven = (value) => {
// 	return value ? value + 7 : 7
// }

// const plus = (value) => {
// 	return value
// }

// const minus = (value) => {
// 	return -value
// }


// console.log(
// 	seven(plus(one()))
// ) // -> 8.
// console.log(
// 	seven(minus(two())) //-> 5
// )


// Task 10
// Реализовать функцию сортировки массива пузырьком
// [ 6, 4, 1, 2, 3, 7, 8 ] // O(n2)


// Task 11
// Есть строка, состоящая из разных скобок - str = "())({}}{()][][", написать функцию проверки закрыты ли все.
// function isBalanced(str) {
// 	const br = "(){}[]";

// 	// стек открытых скобок
// 	const st = [];
// 	// бежим по всей строке
// 	for (let i = 0; i < str.length; ++i) {
// 		// текущий символ
// 		let ch = str[i]; //)
// 		// ищем символ в скобках
// 		var ind = br.indexOf(ch); //1
// 		// если скобка найдена
// 		if (ind >= 0) {
// 			// проверяем, какая это скобка
// 			if (ind & 1) { // Можно проверять на четность / нечность
// 				// если закрывающая скобка, проверяем стек
// 				// стек пуст - плохо
// 				if (!st.length) return false;
// 				// извлекаем последнюю открытую скобку из стека
// 				var last_br = st.pop();
// 				// если она не соответствует закрывающей скобке - тоже плохо
// 				if (last_br != br[ind - 1]) return false;
// 			} else {
// 				// открывающую скобку просто пихаем в стек
// 				st.push(ch);
// 			}
// 		}
// 	}
// 	// если после обхода всей строки стек пуст - всё ок
// 	return !st.length;
// }


// function isBalanced(string) {
// 	const start = '({['
// 	const end = ']})'

// 	const map = {
// 	  '}': '{',
// 	  ')': '(',
// 	  ']': '['
// 	}

// 	const queue = []

// 	for (let i = 0; i < string.length; i++) {
// 	  const char = string[i]

// 	  if (start.includes(char)) {
// 		queue.push(char)
// 	  } else if (end.includes(char)) {
// 		const last = queue.pop()

// 		if (map[char] !== last) {
// 		  return false
// 		}
// 	  }
// 	}

// 	return !queue.length
//   }


// Task 12
// Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив, состоящий только из уникальных значений первого массива.


// const f = (arr) => {

// 	const res = {}

// 	arr.forEach(n => {
// 		res[n] = ""
// 	})

// 	return Object.keys(res).map(k => +k)

// }

// console.log(
// 	f([2, 2, 3, 4, 4, 6])
// ) // -> 1, 2, 3, 4, 6

// Task 13
// Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.
// f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]

// const f = (arr) => {

// 	let res = []

// 	arr.forEach(n => {
// 		if (n !== null) {
// 			res.push(2 * n)
// 		}
// 	})

// 	return res
// }


// Task 14
// Необходимо написать функцию, возвращающую значения всех вершин дерева
// getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]

// const tree2 = {
// 	value: 1,
// 	children: [
// 		{
// 			value: 2,
// 			children: [
// 				{ value: 4 },
// 				{ value: 5 },
// 			]
// 		},
// 		{
// 			value: 3,
// 			children: [
// 				{ value: 6 },
// 				{ value: 7 },
// 			]
// 		}
// 	]
// };

// const getTreeValues = (tree) => {

// 	let values = [tree.value]

// 	if (tree.children) {
// 		values = values.concat(getTreeValues(tree.children))
// 	}

// 	return values

// }



// Task 15
// Необходимо написать функцию, возвращающую сумму всех вершин дерева из Task 14

// Task 16
// Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время, через которое взорвется и
// некоторый «звук взрыва» (строку, которую вернет через заданное время).

// function Bomb(duration, sound) {
// 	this.duration = duration
// 	this.sound = sound

// 	setTimeout(() => {
// 		this.boom()
// 	}, 1000 * duration)

// }

// Bomb.prototype.boom = function () {
// 	console.log(this.sound)
// }

// new Bomb(2, "boom")
// new Bomb(4, "hi")


// Task 17
// Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку,
// в которой повторяющиеся буквы заменены количеством повторений.
// rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'

// const rle = (str) => {

// 	let res = ''

// 	let currentChar = str[0]
// 	let repeatedCount = 1
// 	let currentIndex = 1

// 	while (currentIndex <= str.length) {

// 		if (currentChar === str[currentIndex]) {
// 			repeatedCount += 1
// 		} else {
// 			if (repeatedCount > 1) {
// 				res = res + currentChar + repeatedCount
// 			} else {
// 				res = res + currentChar
// 			}
// 			currentChar = str[currentIndex]
// 			repeatedCount = 1
// 		}

// 		currentIndex += 1
// 	}

// 	return res
// }

//console.log(rle("AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD"))


// Task 18
// Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.

// const isSorted = (arr) => {
// 	let min = arr[0]

// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[i] < min) {
// 			return false
// 		} else {
// 			min = arr[i]
// 		}
// 	}

// 	return true
// }

// console.log(isSorted(
// 	[1, 2, 3, 4, 6, 5]
// ))

// Task 19
// Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются)
// от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число,
// либо их может не быть вовсе.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined

/*
Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются) от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число, либо их может не быть вовсе.
Способны ли вы добиться того, чтобы функция решала задачу за время O(N)?

Формула суммы арифмитической прогрессии: (n*n + n)/2 === sum(arr)
*/

// function miss(arr){ //[1, 4, 3] - 4
//     let l = arr.length; //3
//     if (l === 0) return null;

//     function summ(n){
//         return (n*n + n)/2 //12/2 -> 6
//     }

//     let originSumm = summ(l); //6
//     let curSumm = 0; //8

//     for (var i = 0; i < l; i++) {
//         curSumm += arr[i];
//     }

//     if (originSumm === curSumm){
//         return null;
//     } else {
//         return summ(l+1) - curSumm; //10 - 8 = 2
//     }
// }

//

// Task 20
// Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().
// class LinkedList {...}
// let list = new LinkedList(1, 2, 3)
// list.add(4)                           // undefined
// list.add(5)                           // undefined
// list.has(1)                           // true
// list.has(4)                           // true
// list.has(6)                           // false

// class ListNode {
// 	constructor(value, next) {
// 		this.value = value
// 		this.next = next
// 	}
// }

// class LinkedList {

// 	head = null
// 	tail = null

// 	add(value) {

// 	}

// 	has(value) {

// 	}
// }

// Task 21
// Что выведет консоль?

// Promise
// 	.resolve()
// 	.then(() => console.log(1))
// 	.then(() => console.log(2))
// 	.then(() => console.log(3));

// Promise
// 	.resolve()
// 	.then(() => console.log(4))
// 	.then(() => console.log(5))
// 	.then(() => console.log(6));
