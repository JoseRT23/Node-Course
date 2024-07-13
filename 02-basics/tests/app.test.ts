//AAA => ARRANGE, ACT, ASSERTS

describe('Test in App file', () => {
    test('should be true', () => {
        //1. Arrange
        const num1 = 10;
        const num2 = 12;

        //2. Act
        const result = num1 + num2;

        //3. Assert
        expect( result ).toBe(22);
    });
});