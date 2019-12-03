/**
 * Faker data generator
 * author : Romain Amichaud
 *
 * @type {Faker}
 */
module.exports = class Faker {

    constructor(_locale = "bzh_FR") {
        this._locale = _locale;

        if (!this._isValidLocale()) {
            throw new Error(`Invalid locale : '${this._locale}' does not exist.`);
        }

        this._locales = this._getLocales();
    }

    /**
     * getFake()
     *
     * Usage : faker.get(attribute)
     * Return a random value if 'locale' and 'attribute' variables are valids.
     *
     * @param attribute
     * @returns {*|string}
     */
    getFake(attribute) {
        let attributes = "";

        if (!this._isValidAttribute(attribute)) {
            throw new Error(`Invalid attribute : '${attribute}' is not a valid attribute. \n'${this._locale}' attributes are : \n${this._getAttributes()}`);
        } else {
            attributes = require(__dirname + "/locales/" + this._locale + "/" + attribute);
        }

        return attributes[this._random(attributes.length)];
    }

    /**
     * _getAttributes()
     *
     * Private function to get attributes files in the 'locale' folder.
     *
     * @returns {string[]}
     * @private
     */
    _getAttributes() {
        const fs = require('fs');
        return fs.readdirSync(__dirname + "/locales/" + this._locale);
    }

    /**
     * _isValidAttribute()
     *
     * Private function to check if the 'attribute' variable exist in 'locale' folder.
     *
     * @param attribute
     * @returns {boolean}
     * @private
     */
    _isValidAttribute(attribute) {
        return this._getAttributes().includes(attribute);
    }

    /**
     * _getLocales()
     *
     * Private function to get locales folder.
     *
     * @returns {string[]}
     * @private
     */
    _getLocales() {
        const fs = require('fs');
        return fs.readdirSync(__dirname + "/locales");
    }

    /**
     * _isValidLocale()
     *
     * Private function to check if the 'locale' folder exist.
     *
     * @returns {boolean}
     * @private
     */
    _isValidLocale() {
        return this._getLocales().includes(this._locale);
    }

    /**
     * _random()
     *
     * Private function to get a random number between 0 and 'max'.
     *
     * @param max
     * @returns {number}
     * @private
     */
    _random(max) {
        return Math.floor(Math.random() * (max));
    }

}
