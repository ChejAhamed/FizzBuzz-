const fizzbuzz= require('./fizzbuzz')

describe('fizzbuzz',()=>{
    test('should print 1 if it receive 1',()=>{
        const expected=1;
        const result=fizzbuzz(1)
        expect(expected).toBe(result)
    })
    test('should print fizz if it receive 3',()=>{
        const expected='fizz';
        const result=fizzbuzz(3)
        expect(expected).toBe(result)
    })
    test('should print fizz if it receive a multiple of 3',()=>{
        const expected='fizz';
        const result=fizzbuzz(6)
        expect(expected).toBe(result)
    })
    test('should buzz  if it receive 5',()=>{
        const expected='buzz';
        const result=fizzbuzz(5)
        expect(expected).toBe(result)
    })
    test('should print buzz if it receive a multiple of 5',()=>{
        const expected='buzz';
        const result=fizzbuzz(10)
        expect(expected).toBe(result)
    })
})