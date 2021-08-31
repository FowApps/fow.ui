import convertNestedObjectToArray from './convertNestedObjectToArray';

describe('convert object to array', () => {
    it('should be array', () => {
        const obj = {
            key: 'value',
        };
        const result = convertNestedObjectToArray(obj);
        expect(result).toStrictEqual(['value']);
    });
});
