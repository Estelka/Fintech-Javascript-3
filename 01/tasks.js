/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getParseString(string){
	let arr=[]; let arrFloat=[]; 
	arr = string.split(' '); 
	let i=0; 
	while (i<arr.length){ 
		arrFloat[i]=parseFloat(arr[i]); 
		i++; 
	} 
	var positivArr = arrFloat.filter(i => !isNaN(i)); 
	return positivArr;
}

function MinMax(numbers) {
	let sorted = numbers.sort((a,b) => a - b);
	console.log(sorted);
	return {
		min: sorted[0],
		max: sorted[sorted.length - 1]
	}
}

function getMinMax(string) {
	return MinMax(getParseString(string));
}

//getMinMax('1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028');

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
	if (x < 2)  return x;
	return fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
let cache = {};
function fibonacciWithCache(x) {
	if (x in cache){
		return cache[x];
	}
	else {
		if (x < 2)  return x;
		let result = fibonacciWithCache(x - 1) + fibonacciWithCache(x - 2);
		cache[x] = result;
		return result;	
	}
}

/* ============================================= */

/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */
function printNumbers(max, cols) {

}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {

}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
