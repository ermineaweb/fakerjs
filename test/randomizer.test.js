const randomizer = require("../src/randomizer");
const MIN_RANDOM = 1;
const MAX_RANDOM = 2;

test("Randomizer.randNumber(max, min) return an integer random number between min and max", () => {
    expect(randomizer.randNumber(MAX_RANDOM, MIN_RANDOM))
        .toBeGreaterThanOrEqual(MIN_RANDOM);

    expect(randomizer.randNumber(MAX_RANDOM, MIN_RANDOM))
        .toBeLessThanOrEqual(MAX_RANDOM);

    expect(randomizer.randNumber(MAX_RANDOM))
        .toBeLessThanOrEqual(MAX_RANDOM);

    expect(() => {
        randomizer.randNumber(MIN_RANDOM, MAX_RANDOM)
    }).toThrow();
});