
// Сделайте функцию, которая отнимает от первого числа второе и делит на
// третье. Числа передаются параметром.

function calc (a, b, c) {
    return (a - b) / c;
}

console.log(calc(10,2,4));

// 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
// передается параметром.

function calcPow (a) {
    let square = a*a,
        cube = a*a*a;

    return `Число во второй степени ${square}, число в третьей степени ${cube}`;
}

console.log(calcPow(3));

// Напишите функции min и max, которые возвращают меньшее и большее из
// чисел a и b.

function minNumber (a,b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }

}

function maxNumber (a,b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log('Минимальное из двух чисел ' + minNumber(17,24) + ' ; Максимальное из двух чисел ' + maxNumber(12,-9)); 

// Напишите две функции: первая ф-ция должна возвращать массив с
// числовыми значениями, диапазон которых должен вводиться пользователем
// с клавиатуры; вторая – выводить полученный массив.

function arrPush (a, b) {
    let arr = [];

    for (+a; +a <= +b; a++) {
        arr.push(+a);
    }

    return arr;
}

function arrRecall () {
    let start = prompt('Введите первое число массива'),
        end = prompt('Введите последнее число массвива');

    return console.log(arrPush(start,end));
}

arrRecall();

// Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.

function isEven(a) {
    if (a % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4));

// Напишите ф-цию, в которую передается массив с целыми числами.
// Верните новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей
// задачи.

function arrEven () {
    let arrEven = [];
    
    for (let i = 0; i < arguments.length; i++) {
        if (isEven(arguments[i])) {
            arrEven.push(arguments[i]);
        } 
    }

    return arrEven;
}

console.log(arrEven(1,2,3,4,5,6,7,8));

// Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы):
// Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
// параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
// кроме пробела, то пирамида должна быть нарисована этим символом,


function pyramid () {
    let z = 0,
        row = prompt('Введите кол-во рядов для пирамиды');


       
    if (isNaN(row) || row < 0) {
        z = "";

        for (let i = 0, y = ''; i < 10; i++) {
            z += "*";
            console.log(z);
        }
    } else {
        for (let i = 0, y = 1; i < +row; i++, y++) {
            z = y + z*10;
            console.log(z);
        }
    }

}

pyramid();

// Напишите ф-цию, которая рисует равнобедренный треугольник из
// звездочек:

function triangle () {
    let row = prompt('Введите кол-во рядов для равнобедренного треугольника');


    for (let i = 0; i<=+row; i++) {
        for (let j = 1; j<=+row - i; j++) {
         
        }
            // Не придумал как вывести(((((
        for (let k = 1; k<=2*i-1; k++) {
         
        }
        
    }
}

// Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
// опять сложите его цифры. И так, пока сумма не станет однозначным числом
// (9 и менее). Исп. Рекурсию.

function recursion(a) {
    a = String(a);
    let sumNum = 0;

    for(let i = 0; i < a.length; i++){
        sumNum += +a[i];
    }

    if (sumNum > 9) {
        recursion(sumNum);
    } else {
        console.log(sumNum + " сумма через рекурсию");
    }
}


recursion(2343216787643245679);

// Дан массив с числами (передается параметром). Выведите
// последовательно его элементы, используя рекурсию и не используя цикл.

function arrRecursion (a) {
    console.log(a[0]);

    a.splice(0, 1);
    
    if (a.length > 0) {
        arrRecursion(a);
    }
}

arrRecursion([3,2,1,5,2,3,4]);