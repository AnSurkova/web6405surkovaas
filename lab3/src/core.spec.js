const assert = require('assert');
const core = require('./core'); // Убедитесь, что файл core.js находится в той же директории

describe('Задания core js', () => {
    describe('#isInteger', () => {
        it('Возвращает true на целое число', () => {
            assert.strictEqual(core.isInteger(3), true);
        });

        it('Возвращает false на нецелое число', () => {
            assert.strictEqual(core.isInteger(1.2), false);
        });
    });

    describe('#even', () => {
        it('Возвращает корректный массив', () => {
            assert.deepStrictEqual(
                core.even(),
                [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
            );
        });
    });

    describe('#sumTo', () => {
        it('Возвращает сумму чисел до n', () => {
            assert.strictEqual(core.sumTo(4), 10, 'С маленьким числом');
            assert.strictEqual(core.sumTo(100), 5050, 'С большим числом');
        });
    });

    describe('#recSumTo', () => {
        it('Возвращает сумму чисел до n', () => {
            assert.strictEqual(core.recSumTo(4), 10, 'С маленьким числом');
            assert.strictEqual(core.recSumTo(100), 5050, 'С большим числом');
        });
    });

    describe('#factorial', () => {
        it('Возвращает факториал n', () => {
            assert.strictEqual(core.factorial(5), 120);
            assert.strictEqual(core.factorial(4), 24);
        });
    });

    describe('#isBinary', () => {
        it('Возвращает true при передаче степени двойки', () => {
            assert.strictEqual(core.isBinary(1), true);
            assert.strictEqual(core.isBinary(2), true);
            assert.strictEqual(core.isBinary(2048), true);
        });

        it('Возвращает false при передаче не степени двойки', () => {
            assert.strictEqual(core.isBinary(0), false);
            assert.strictEqual(core.isBinary(12), false);
            assert.strictEqual(core.isBinary(1023), false);
        });
    });

    describe('#fibonacci', () => {
        it('Возвращает n-ое число Фибоначчи корректно', () => {
            assert.strictEqual(core.fibonacci(1), 1);
            assert.strictEqual(core.fibonacci(2), 1);
            assert.strictEqual(core.fibonacci(7), 13);
            assert.strictEqual(core.fibonacci(10), 55);
        });
    });

    describe('#getOperationFn', () => {
        it('Возвращает функцию', () => {
            const sumFn = core.getOperationFn(-1, (a, b) => a + b);
            assert.strictEqual(typeof sumFn, 'function');
        });

        it('Сохраняет внутреннее значение и применяет операцию', () => {
            const multFn = core.getOperationFn(-1, (a, b) => a * b);
            assert.strictEqual(multFn(-1), 1);
            assert.strictEqual(multFn(4), 4);
            assert.strictEqual(multFn(2), 8);
        });

        it('По умолчанию всегда возвращает начальное значение, если нет operatorFn', () => {
            const staticFn = core.getOperationFn(-1);
            assert.strictEqual(staticFn(-1), -1);
            assert.strictEqual(staticFn(7), -1);
            assert.strictEqual(staticFn(0), -1);
        });
    });

    describe('#sequence', () => {
        it('Возвращает функцию с шагом 1 и началом 0, если не переданы значения', () => {
            const generator = core.sequence();
            assert.strictEqual(generator(), 0);
            assert.strictEqual(generator(), 1);
            assert.strictEqual(generator(), 2);
        });

        it('Функция-генератор корректно генерирует значения начиная со start с шагом step', () => {
            const generator1 = core.sequence(10, 3);
            const generator2 = core.sequence(8, 2);
            assert.strictEqual(generator1(), 10);
            assert.strictEqual(generator1(), 13);
            assert.strictEqual(generator2(), 8);
            assert.strictEqual(generator1(), 16);
            assert.strictEqual(generator2(), 10);
        });
    });

    describe('#deepEqual', () => {
        const dummyFunction = () => {};

        it('Возвращает true если объекты равны', () => {
            assert.strictEqual(
                core.deepEqual(
                    {text: 'some text', count: 3, arr: [11, 22]},
                    {text: 'some text', count: 3, arr: [11, 22]}
                ),
                true
            );
            assert.strictEqual(
                core.deepEqual(
                    {obj: {count: 12}, value: null, flag: true},
                    {obj: {count: 12}, value: null, flag: true}
                ),
                true
            );
        });

        it('Возвращает false если объекты не равны', () => {
            assert.strictEqual(
                core.deepEqual(
                    {text: 'some text', count: 3, arr: [11, 22]},
                    {text: 'some text1', count: 4, arr: [11, 22]}
                ),
                false
            );
            assert.strictEqual(
                core.deepEqual(
                    {obj: {arr: [1, 0]}},
                    {obj: {arr: [1, null]}}
                ),
                false
            );
        });
    });
});
