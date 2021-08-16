import setTextTransform from './setTextTransform';

describe('text transform util', () => {
    it('should set given text transform css value ', () => {
        const uppercase = setTextTransform('uppercase');
        expect(uppercase.toString().includes('uppercase')).toBeTruthy();

        const lowercase = setTextTransform('lowercase');
        expect(lowercase.toString().includes('lowercase')).toBeTruthy();

        const capitalize = setTextTransform('capitalize');
        expect(capitalize.toString().includes('capitalize')).toBeTruthy();

        // @ts-ignore
        const initial = setTextTransform('unknown');
        expect(initial.toString().includes('initial')).toBeTruthy();
    });
});
