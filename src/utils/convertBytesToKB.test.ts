import convertBytesToKB from './convertBytesToKB';

describe('convert bytes to KB', () => {
    it('should convert bytes to KB', () => {
        const kb = convertBytesToKB(2500);
        expect(kb).toBe(3);
    });
});
