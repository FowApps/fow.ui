import debounce from './debounce';

jest.useFakeTimers();

describe('debounce', () => {
    let func: jest.Mock;
    let debouncedFunc: any;

    beforeEach(() => {
        func = jest.fn();
        debouncedFunc = debounce(func, 1000);
    });

    test('execute just once', () => {
        for (let i = 0; i < 100; i++) {
            debouncedFunc();
        }

        // Fast-forward time
        jest.runAllTimers();

        expect(func).toBeCalledTimes(1);
    });
});
