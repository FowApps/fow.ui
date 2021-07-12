import getFirstLetters from './getFirstLetters';

const str1 = 'joe';
const result1 = 'JJ';

const str2 = 'Joe Doe';
const result2 = 'JD';

const str3 = 'j';
const result3 = 'JJ';

const str4 = '';
const result4 = '';

describe('get first letters function', () => {
    it('should get first letter', () => {
        expect(getFirstLetters(str1)).toBe(result1);
        expect(getFirstLetters(str2)).toBe(result2);
        expect(getFirstLetters(str3)).toBe(result3);
        expect(getFirstLetters(str4)).toBe(result4);
    });
});
