import {expect} from 'chai';
import {pipe} from '../src/pipe';

describe('Test pipe function', () => {
  it('Should be {t: \'12\'}', () => {
    const add2 = (x: number): number => x + 2;
    const nrToStr = (x: number): string => x.toString();
    const strToObj = (x: string): {t: string} => ({t: x});

    const add2ToStrToObj = pipe(
        add2,
        nrToStr,
        strToObj,
    );
    expect('12').equal(add2ToStrToObj(10).t);
  });
});
