const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe("sum", () => {  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => {
    expected = 1234;
    actual = sum(1000,234);
    expect(actual).toBe(expected)
    
  });

  test('can add two negative numbers', () => {
    expected = -14;
    actual = sum(-5,-9);
    expect(actual).toBe(expected)
    
  });

  test('can add zero', () => {
    expected = 5;
    actual = sum(5,0);
    expect(actual).toBe(expected)
    
  });

});

describe('subtract', () => {
  test('can subtract two small positive numbers', () => {
    expected = 9;
    actual = subtract(12, 3);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => {
    expected = 652;
    actual = subtract(1248, 596);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = -9;
    actual = subtract(-12, -3);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = 12;
    actual = subtract(12, 0);
    expect(actual).toBe(expected);
  });


});

describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 12;
    actual = multiply(4, 3);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => {
    expected = 5535;
    actual = multiply(123, 45);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 36;
    actual = multiply(-12, -3);
    expect(actual).toBe(expected);
  });

  test('can multiply by zero', () => {
    expected = 0;
    actual = multiply(12, 0);
    expect(actual).toBe(expected);
  });


});

describe('divide', () => {
  test('can divide two small positive numbers', () => {
    expected = 3;
    actual = divide(12, 4);
    expect(actual).toBe(expected);
  });

  test('can divide two large positive numbers', () => {
    expected = 1200;
    actual = divide(120000, 100);
    expect(actual).toBe(expected);
  });

  test('can divide by a negative number', () => {
    expected = -3;
    actual = divide(12, -4);
    expect(actual).toBe(expected);
  });

  test('can divide by zero', () => {
    expected = Infinity;
    actual = divide(12, 0);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {
  test('can get modulus of two small positive numbers', () => {
    expected = 0;
    actual = modulus(12, 2);
    expect(actual).toBe(expected);
  });

  test('can get modulus of two large positive numbers', () => {
    expected = 2;
    actual = modulus(12566, 4);
    expect(actual).toBe(expected);
  });

  test('can get modulus of two negative numbers', () => {
    expected = -2;
    actual = modulus(-12566, -4);
    expect(actual).toBe(expected);
  });

});

describe('even', () => {
  test('can get even', () => {
    expected = true;
    actual = even(6);
    expect(actual).toBe(expected);
  })

  test('can get not even', () => {
    expected = false;
    actual = even(5);
    expect(actual).toBe(expected);
  })

});

describe('odd', () => {
  test('can get odd', () => {
    expected = true;
    actual = odd(5);
    expect(actual).toBe(expected);
  })

  test('can get not odd', () => {
    expected = false;
    actual = odd(6);
    expect(actual).toBe(expected);
  })
});
