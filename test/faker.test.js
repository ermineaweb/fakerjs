const faker = require("../src/");

const VALID_LOCALE = "fr_FR";
const INVALID_LOCALE = "invalid_locale";
const VALID_ATTRIBUTE = "firstname";
const INVALID_ATTRIBUTE = "invalid_attribute";
const fk = faker.create(VALID_LOCALE);

test("faker.create(locale) must throw an error if locale is not valid", () => {
    expect(() => {
        faker.create(INVALID_LOCALE);
    }).toThrow();

    expect(() => {
        faker.create(VALID_LOCALE);
    }).not.toThrow();
});

test("_getDatas(attribute) return the content of the file : src/data/LOCALE/attribute", () => {
    expect(fk._getDatas(VALID_ATTRIBUTE))
        .toBeInstanceOf(Array);

    expect(() => {
        fk._getDatas(INVALID_ATTRIBUTE);
    }).toThrow();
});

test("getFake(attribute) return a random string, throw an Error if attribute is not valid", () => {
    expect(fk.getFake(VALID_ATTRIBUTE))
        .toMatch(/\b[^\d\W]+\b/);

    expect(fk.getFake(VALID_ATTRIBUTE))
        .not.toBeUndefined();

    expect(fk.getFake(VALID_ATTRIBUTE))
        .not.toBeNull();

    expect(() => {
        fk.getFake(INVALID_ATTRIBUTE);
    }).toThrow();
});

test("_getAttributes() return a list of files contained in /src/data/" + VALID_LOCALE, () => {
    expect(fk._getAttributes())
        .toContain(VALID_ATTRIBUTE);
});

test("_isValidAttribute(attr) is true if attribute exist in /src/data/" + VALID_LOCALE, () => {
    expect(fk._isValidAttribute(VALID_ATTRIBUTE))
        .toBeTruthy();

    expect(fk._isValidAttribute(INVALID_ATTRIBUTE))
        .toBeFalsy();
});

test("_getLocales() return a list of folder contained in /src/data/", () => {
    expect(fk._getLocales())
        .toContain(VALID_LOCALE);
});

test("_isValidLocale() is true if locale exist in /src", () => {
    expect(fk._isValidLocale(VALID_LOCALE))
        .toBeTruthy();

    expect(fk._isValidLocale(INVALID_LOCALE))
        .toBeFalsy();
});