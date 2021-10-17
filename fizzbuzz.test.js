const fizzbuzz= require('./fizzbuzz')

describe('fizzbuzz',()=>{
    test('should print 1 if it receive 1',()=>{
        const expected=1;
        const result=fizzbuzz(1)
        expect(expected).toBe(result)
    })
    test('should print fizz if it receive fizz',()=>{
        const expected='fizz';
        const result=fizzbuzz('fizz')
        expect(expected).toBe(result)
    })
})