// Проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n | 0) === n;
}

// Возвращает массив четных чисел от 2 до 20 включительно
function even() {
    return Array.from({ length: 10 }, (_, i) => (i + 1) * 2);
}

// Считает сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Считает сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n === 1) return 1;
    return n + recSumTo(n - 1);
}

// Считает факториал заданного числа
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Проверяет, является ли число степенью двойки
function isBinary(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

// Находит N-е число Фибоначчи
function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

// Возвращает функцию, выполняющую переданную операцию
function getOperationFn(initialValue, operatorFn) {
    let storedValue = initialValue;
    return operatorFn
        ? (newValue) => (storedValue = operatorFn(storedValue, newValue))
        : () => storedValue;
}

// Создает генератор арифметической последовательности
function sequence(start = 0, step = 1) {
    let current = start;
    return function generator() {
        const result = current;
        current += step;
        return result;
    };
}

// Рекурсивное сравнение объектов
function deepEqual(firstObject, secondObject) {
    if (firstObject === secondObject) return true;
    if (
        typeof firstObject !== 'object' ||
        typeof secondObject !== 'object' ||
        firstObject === null ||
        secondObject === null
    ) {
        return false;
    }
    const keysA = Object.keys(firstObject);
    const keysB = Object.keys(secondObject);
    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
        if (!keysB.includes(key) || !deepEqual(firstObject[key], secondObject[key])) {
            return false;
        }
    }
    return true;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
