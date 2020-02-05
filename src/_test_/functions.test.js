

import  { add } from '../utils/functions'

test('adding', () => {
    expect(add(1, 2)).toBe(3)
})

test('error', ()=>{
    expect(add(1, 3)).not.toBe(2)
})

test('Add handler string concat', () => {
    expect(add('3', '4')).toBe(7); 
})

test('Add returns NaN', () => {
    expect(add('a', 'b')).toBeNaN(); 
})