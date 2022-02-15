import { uuidv4 } from './uuid';

describe('generate uuid', () => {
    it('uuid length', () => {
        expect(uuidv4()).toHaveLength(36);
    });

    it('match regex', () => {
        const regexExp =
            /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
        const uuid = uuidv4();
        const result = regexExp.test(uuid);
        expect(result).toBeTruthy();
    });
});
