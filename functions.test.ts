const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('return an array', () => {
        const testArray = [4, 5, 10, 11, 13]
        const testVar = shuffleArray(testArray)
        expect(Array.isArray(testVar)).toBe(true)
    })

    test('return array the same length as original array', () => {
        const testArray = [4, 5, 10, 11, 13]
        const testVar = shuffleArray(testArray)
        expect(testArray.length).toEqual(testVar.length)
    })

    // test('returns an array of the same items as original array', () => {})

    // test('returns array with shuffled items', () => {})
})