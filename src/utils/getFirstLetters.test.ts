import getFirstLetters from './getFirstLetters';

const str1 = 'John';
const result1 = 'J';

const str2 = 'John Doe';
const result2 = 'JD';

const str3 = 'John Evelyn Doe';
const result3 = 'JD';

const str4 = 'jOhN';
const result4 = 'J';

const str5 = 'johN Doe';
const result5 = 'JD';

const str6 = 'johN eVelYn dOe';
const result6 = 'JD';

const str7 = '';
const result7 = '';

const str8 = ' ';
const result8 = '';

describe('get first letters function', () => {
    it('should get first letter', () => {
        expect(getFirstLetters(str1)).toBe(result1);
        expect(getFirstLetters(str2)).toBe(result2);
        expect(getFirstLetters(str3)).toBe(result3);
        expect(getFirstLetters(str4)).toBe(result4);
        expect(getFirstLetters(str5)).toBe(result5);
        expect(getFirstLetters(str6)).toBe(result6);
        expect(getFirstLetters(str7)).toBe(result7);
        expect(getFirstLetters(str8)).toBe(result8);
    });
});
